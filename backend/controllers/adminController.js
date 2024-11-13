
import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'


// API for adding doctor
const addDoctor =async (req,res)=>{

    try{
        const {name,email,password,speciality,degree,about,fees,address,experience}=req.body
        const imageFile=req.file
        

        console.log("Uploaded file details:", imageFile); // Check this output in the console

        // Check if the file is missing
        if (!imageFile) {
            return res.json({ success: false, message: "Image file is missing" });
        }

       


        //checking for all data to add doctor

        if(!name || !email || !password || !speciality || !about || !fees || !address){
            return res.json({success:false,message:"Missing Details"})
        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a valid email"})
        }

        //validating strong password format
        if(password.length <8){
            return res.json({success:false,message:"Password should be at least 8 characters long"})
        }

        //hashing doctor password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        //upload image to cloudinary
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl=imageUpload.secure_url

        //creating doctor object
        const doctorData={
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            slots_booked:0, // added by chatgpt
            date:Date.now()
            
        }
        //saving doctor to database
        const newDoctor=new doctorModel(doctorData)
        await newDoctor.save()


        res.json({success:true,message:"Doctor Added Successfully"})
        
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export {addDoctor}