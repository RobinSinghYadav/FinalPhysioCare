import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form className='m-5 w-full'>
        <p className='mb-3 text-lg font-medium'>Add Doctor</p>

        <div className='bg-white px-8 py-8 border rounded w-full max-w-6xl max-h-[80vh] overflow-scroll'>
            <div className='flex items-center gap-4 mb-8 text-gray-500'>
                <label htmlFor="doc-img">
                    <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={assets.upload_area} alt="" />
                </label>
                <input type="file" id="doc-img" hidden />
                <p>Upload Doctor <br /> Picture</p> 
            </div>
            <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
                <div className='w-full lg:flex-1 flex flex-col gap-4'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Doctor Name</p>
                        <input className='border rounded px-3 py-2' type="text" placeholder="Name" required />
                    </div>

                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Doctor Email</p>
                        <input className='border rounded px-3 py-2' type="Email" placeholder="Email" required />
                    </div>

                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Doctor Password</p>
                        <input className='border rounded px-3 py-2' type="password" placeholder="Password" required />
                    </div>
                    
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Experience</p>
                        <select className='border rounded px-3 py-2' >
                           
                            <option value="1 Year">1 Year</option>
                            <option value="2 Year">2 Years</option>
                            <option value="3 Year">3 Years</option>
                            <option value="4 Year">4 Years</option>
                            <option value="5 Year">5 Years</option>
                            <option value="6 Year">6 Years</option>

                            <option value="7 Year">7 Years</option>
                            <option value="8 Year">8 Years</option>
                            <option value="9 Year">9 Years</option>

                            <option value="10 Year">10 Years</option>

                        </select>
                    </div>

                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Fees</p>
                        <input className='border rounded px-3 py-2' type="number" placeholder="fees" required />
                    </div>

                </div>

                <div className='w-full lg:flex-1 flex flex-col gap-4'>
                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Speciality</p>
                        <select className='border rounded px-3 py-2' name="" id="">
                            <option value="Posture Correction Exercises">Posture Correction Exercises</option>
                            <option value="Mobility Exercises">Mobility Exercises</option>
                            <option value="Balance and Coordination Exercises">Balance and Coordination Exercises</option>
                            <option value="Strengthening Exercise">Strengthening Exercise</option>
                            <option value="Stretching Exercises">Stretching Exercises</option>
                            <option value="Core Stability Exercises">Core Stability Exercises</option>
                        </select>
                    </div>

                    <div className='flex-1 flex flex-col gap-1'>
                        <p>Education</p>
                        <input className='border rounded px-3 py-2' type="text" placeholder="Education" required />
                    </div>

                    <div>
                        <p className='flex-1 flex flex-col gap-1'>Address</p>
                        <input className='border rounded px-3 py-2 w-full mb-4' type="text" placeholder="Address 1" required />
                        <input className='border rounded px-3 py-2 w-full' type="text" placeholder="Address 2" required />

                    </div>
                </div>
                </div>
                <div>
                        <p className='mt-4 mb-2'>About Doctor</p>
                        <textarea className='w-full px-4 pt-2 border rounded' placeholder="Write About Doctor" rows={5} required />
                    </div>

                    <button className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Add Doctor</button>
            
        </div>
    </form>
  )
}

export default AddDoctor