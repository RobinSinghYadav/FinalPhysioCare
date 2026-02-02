// import React, { useContext, useEffect } from 'react'
// import { DoctorContext } from '../../context/DoctorContext'
// import { AppContext } from '../../context/AppContext'
// import { assets } from '../../assets/assets'

// const DoctorAppointments = () => {

//     const {dToken,appointments,getAppointments,completeAppointment,cancelAppointment}=useContext(DoctorContext)
//     const {calculateAge,slotDateFormat,currency}=useContext(AppContext)

//     useEffect(()=>{
//       if(dToken){
//         getAppointments()
//       }
//     },[dToken])
//   return (
//     <div className='w-full max-w-6xl m-5'>
//     <p className='mb-3 text-lg font-medium '>All Appointments</p>
//     <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll'>
//       <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>

//         <p>#</p>
//         <p>patient</p>
//         <p>payment</p>
//         <p>Age</p>
//         <p>Date & time</p>
//         <p>Fees</p>
//         <p>Action</p>
//       </div>
//       {
//         appointments.map((item,index)=>(
//           <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr ] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-600' key={index}>
//             <p className='max-sm:hidden'>{index+1}</p>
//             <div className='flex items-center gap-2'>
//               <img className='w-8 rounded-full' src={item.userData.image} alt="" /><p>{item.userData.name}</p>
//             </div>
//             <div>
//               <p className='text-xs inline border border-primary px-2 rounded-full'>
//                 {item.payment?'online':'Cash'}
//               </p>
//             </div>
//             <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
//             <p >{slotDateFormat(item.slotDate)},{item.slotTime}</p>
//             <p>{currency},{item.amount}</p>
//             {
//               item.cancelled
//               ? <p className='text-green-500 text-xs font-medium'>Cancelled</p>
//               :item.isCompleted
//               ? <p className='text-green-500 text-xs font-medium'>Completed</p>
//               :<div className='flex'>
//               <img onClick={()=>cancelAppointment(item._id)} src={assets.cancel_icon} alt="" />
//               <img onClick={()=>completeAppointment(item._id)} src={assets.tick_icon} alt="" />
//               </div>
//             }
            
//             </div>
//         ))
//       }
//     </div>
//     </div>
//   )
// }

// export default DoctorAppointments


// import React, { useContext, useEffect } from 'react'
// import { DoctorContext } from '../../context/DoctorContext'
// import { AppContext } from '../../context/AppContext'
// import { assets } from '../../assets/assets'

// const DoctorAppointments = () => {

//     const {dToken,appointments,getAppointments,completeAppointment,cancelAppointment}=useContext(DoctorContext)
//     const {calculateAge,slotDateFormat,currency}=useContext(AppContext)

//     useEffect(()=>{
//       if(dToken){
//         getAppointments()
//       }
//     },[dToken])
//   return (
//     <div className='w-full max-w-6xl mx-auto my-8 px-4'>
//       <h2 className='mb-6 text-2xl font-semibold text-gray-800'>Appointments</h2>
//       <div className='bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden'>
//         <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-4 px-6 bg-gray-50 border-b border-gray-200 font-medium text-gray-700'>
//           <p>#</p>
//           <p>Patient</p>
//           <p>Payment</p>
//           <p>Age</p>
//           <p>Date & Time</p>
//           <p>Fees</p>
//           <p>Action</p>
//         </div>
//         <div className='max-h-[70vh] overflow-y-auto'>
//           {appointments.length === 0 ? (
//             <div className='py-8 text-center text-gray-500'>No appointments found</div>
//           ) : (
//             appointments.map((item,index)=>(
//               <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-600 py-4 px-6 border-b border-gray-200 hover:bg-gray-50 transition-colors' key={index}>
//                 <p className='max-sm:hidden'>{index+1}</p>
//                 <div className='flex items-center gap-3'>
//                   <img className='w-10 h-10 rounded-full object-cover border border-gray-200' src={item.userData.image} alt="" />
//                   <p className='font-medium'>{item.userData.name}</p>
//                 </div>
//                 <div>
//                   <p className={`text-xs inline-block py-1 px-3 rounded-full ${item.payment ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
//                     {item.payment ? 'Online' : 'Cash'}
//                   </p>
//                 </div>
//                 <p className='max-sm:hidden'>{calculateAge(item.userData.dob)} yrs</p>
//                 <p className='text-sm'>{slotDateFormat(item.slotDate)}, <span className='font-medium'>{item.slotTime}</span></p>
//                 <p className='font-medium'>{currency} {item.amount}</p>
//                 {
//                   item.cancelled
//                   ? <p className='text-red-500 text-sm font-medium'>Cancelled</p>
//                   : item.isCompleted
//                   ? <p className='text-green-600 text-sm font-medium'>Completed</p>
//                   : <div className='flex space-x-2'>
//                       <button 
//                         onClick={()=>cancelAppointment(item._id)} 
//                         className='p-2 rounded-full hover:bg-red-50 transition-colors'
//                         title="Cancel Appointment"
//                       >
//                         <img className='w-5 h-5' src={assets.cancel_icon} alt="Cancel" />
//                       </button>
//                       <button 
//                         onClick={()=>completeAppointment(item._id)} 
//                         className='p-2 rounded-full hover:bg-green-50 transition-colors'
//                         title="Complete Appointment"
//                       >
//                         <img className='w-5 h-5' src={assets.tick_icon} alt="Complete" />
//                       </button>
//                     </div>
//                 }
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DoctorAppointments


import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {

    const {dToken,appointments,getAppointments,completeAppointment,cancelAppointment}=useContext(DoctorContext)
    const {calculateAge,slotDateFormat,currency}=useContext(AppContext)

    const initiateCall = (patientName) => {
      const meetingLink = "https://meet.jit.si/Consultation__John%20Doe";
      window.open(meetingLink, '_blank');
    }

    useEffect(()=>{
      if(dToken){
        getAppointments()
      }
    },[dToken])
  return (
    <div className='w-full max-w-6xl mx-auto my-8 px-4'>
      <h2 className='mb-6 text-2xl font-semibold text-gray-800'>Appointments</h2>
      <div className='bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr_1fr] gap-1 py-4 px-6 bg-gray-50 border-b border-gray-200 font-medium text-gray-700'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
          <p>Call</p>
        </div>
        <div className='max-h-[70vh] overflow-y-auto'>
          {appointments.length === 0 ? (
            <div className='py-8 text-center text-gray-500'>No appointments found</div>
          ) : (
            appointments.map((item,index)=>(
              <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr_1fr] gap-1 items-center text-gray-600 py-4 px-6 border-b border-gray-200 hover:bg-gray-50 transition-colors' key={index}>
                <p className='max-sm:hidden'>{index+1}</p>
                <div className='flex items-center gap-3'>
                  <img className='w-10 h-10 rounded-full object-cover border border-gray-200' src={item.userData.image} alt="" />
                  <p className='font-medium'>{item.userData.name}</p>
                </div>
                <div>
                  <p className={`text-xs inline-block py-1 px-3 rounded-full ${item.payment ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                    {item.payment ? 'Online' : 'Cash'}
                  </p>
                </div>
                <p className='max-sm:hidden'>{calculateAge(item.userData.dob)} yrs</p>
                <p className='text-sm'>{slotDateFormat(item.slotDate)}, <span className='font-medium'>{item.slotTime}</span></p>
                <p className='font-medium'>{currency} {item.amount}</p>
                {
                  item.cancelled
                  ? <p className='text-red-500 text-sm font-medium'>Cancelled</p>
                  : item.isCompleted
                  ? <p className='text-green-600 text-sm font-medium'>Completed</p>
                  : <div className='flex space-x-2'>
                      <button 
                        onClick={()=>cancelAppointment(item._id)} 
                        className='p-2 rounded-full hover:bg-red-50 transition-colors'
                        title="Cancel Appointment"
                      >
                        <img className='w-10 h-10' src={assets.cancel_icon} alt="Cancel" />
                      </button>
                      <button 
                        onClick={()=>completeAppointment(item._id)} 
                        className='p-2 rounded-full hover:bg-green-50 transition-colors'
                        title="Complete Appointment"
                      >
                        <img className='w-10 h-10' src={assets.tick_icon} alt="Complete" />
                      </button>
                    </div>
                }
                <div>
                  {item.payment && item.userData.phone && !item.cancelled && !item.isCompleted && (
                    <button 
                      onClick={() => initiateCall(item.userData.phone)}
                      className='flex items-center justify-center p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full transition-colors'
                      title="Call Patient"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointments