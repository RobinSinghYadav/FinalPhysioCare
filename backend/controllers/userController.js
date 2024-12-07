import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'



//API to register User
const registerUser = async(req,res)=>{
    try{
        const {name,email,password}=req.body

        if(!name || !email || !password){
            return res.json({success:false,message:"Missing Details"})
        }
        // validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a valid email"})
        }
        //validating lenght of password
        if(password.length<8){
            return res.json({success:false,message:"Password should be at least 8 characters long"})
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const userData = {
            name,email,password:hashedPassword
        }
        //saving user data to the database
        const newUser = new userModel(userData)
        const user = await newUser.save()
        
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
        res.json({success:true,token})


    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})  
    }
}

//API to login User

const loginUser = async(req,res)=>{
    try{
        const {email,password}=req.body

        if(!email ||!password){
            return res.json({success:false,message:"Missing Details"})
        }

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false,message:"User Not Found"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
             res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Incorrect Password"})
        }

       

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to get user profile data

const getProfile = async(req,res)=>{
    try{
        const {userId} = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true,userData})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to update user profile data

const updateProfile = async(req,res)=>{
    try{
        const {userId,name,phone,address,dob,gender}=req.body
        const imageFile= req.file

        if(!name ||!dob ||!gender || !phone){
            return res.json({success:false,message:"Missing Details"})
        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})

        if(imageFile){
            //upload image to cloudinary
            const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
            const imageURL=imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }
        res.json({success:true,message:'Profile updated successfully'})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to book Appointment

const bookAppointment = async(req,res)=>{
    try{
        const {userId,docId,slotDate,slotTime}=req.body

        const docData = await doctorModel.findById(docId).select('-password')

        if(!docData.available){
            return res.json({success:false,message:"Doctor is not available at this time"})
        }

        let slots_booked = docData.slots_booked

        if (typeof slots_booked !== 'object' || slots_booked === null) {
            slots_booked = {}; // Reset to an empty object if it's not already an object
        }

        //checking for slots availability
        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
                return res.json({success:false,message:"Slot is already booked"})
            }
            else{
                slots_booked[slotDate].push(slotTime)
            }
        }
        else{
            slots_booked[slotDate]=[]
            slots_booked[slotDate].push(slotTime)
        }
        

        const userData = await userModel.findById(userId).select('-password')

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            slotDate,
            slotTime,
            docData,
            userData,
            amount:docData.fees,
            date: Date.now()
        }
        

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        //save new slots data in docData
        await doctorModel.findByIdAndUpdate(docId,{slots_booked})
        
        res.json({success:true,message:'Appointment Booked Successfully'})
        
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {registerUser,loginUser, getProfile, updateProfile, bookAppointment} 