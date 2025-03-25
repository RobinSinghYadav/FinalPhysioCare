// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'



// const Header = () => {

//     const navigate=useNavigate()
//   return (
//     <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
//         {/*-------Left Side------------*/}
//         <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'> 
//             <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                 Book Appointment <br/> with Trusted Therapists

//             </p>
//             <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                 <img className='w-28' src={assets.group_profiles} alt="" />
//                 <p>Simply browse through our extensive list of trusted Therapists, <br className='hidden sm:block' /> schedule your appointment hassle-free
//                 </p>
//             </div>
//             <a onClick={()=>navigate('/doctors')} className='flex items-center gap-2 cursor-pointer bg-white px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//                 Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//             </a>
//         </div>

//         {/*------------Right Side---------*/}
//         <div className='md:w-1/2 relative'>
//             <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
//             {/* <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img2} alt="" /> */}
            

//         </div>
//     </div>
//   )
// }

// export default Header

// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const navigate = useNavigate();

//   // Define animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1 } },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } },
//   };

//   return (
//     <motion.div
//       className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       {/* Left Side */}
//       <motion.div
//         className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]"
//         variants={textVariants}
//       >
//         <motion.p
//           className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight"
//           variants={textVariants}
//         >
//           Book Appointment <br /> with Trusted Therapists
//         </motion.p>
//         <motion.div
//           className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light"
//           variants={textVariants}
//         >
//           <motion.img className="w-28" src={assets.group_profiles} alt="" />
//           <p>
//             Simply browse through our extensive list of trusted Therapists,{' '}
//             <br className="hidden sm:block" /> schedule your appointment
//             hassle-free
//           </p>
//         </motion.div>
//         <motion.a
//           onClick={() => navigate('/doctors')}
//           className="flex items-center gap-2 cursor-pointer bg-white px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
//           variants={buttonVariants}
//         >
//           Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
//         </motion.a>
//       </motion.div>

//       {/* Right Side */}
//       <motion.div
//         className="md:w-1/2 relative"
//         variants={imageVariants}
//       >
//         <motion.img
//           className="w-full md:absolute bottom-0 h-auto rounded-lg"
//           src={assets.header_img}
//           alt=""
//           variants={imageVariants}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Header;


import React from 'react';
import { Calendar, Clock, Award, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate()

    return (
      <div className="h-screen bg-white">
        {/* Hero Section */}
        <div className="relative flex items-center h-full">
          <div className="absolute inset-0 top-0 left-0">
            <img 
              src="https://img.freepik.com/free-photo/young-hispanic-physioterapist-woman-make-arm-rehab-treatment-man-clinic_839833-8596.jpg?t=st=1742811693~exp=1742815293~hmac=405de0afa803bfe96238bb5cb187288015c0d95ff5b940f2ec93f21f61db398e&w=1060"
              alt="Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 w-fit"
                >
                  <Award size={20} />
                  <span className="text-sm font-medium">Trusted by 10,000+ Patients</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  Expert Physical Therapy & Rehabilitation
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lg text-gray-600 max-w-xl"
                >
                  Experience personalized care from our certified physiotherapists. We're dedicated to helping you recover, strengthen, and maintain optimal physical health.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button 
                    onClick={() => navigate('/doctors')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                  >
                    Book Appointment
                    <ArrowRight size={20} />
                  </motion.button>
                  <motion.button 
                    onClick={() => navigate('/about')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="grid grid-cols-2 gap-6 pt-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Easy Scheduling</h3>
                      <p className="text-sm text-gray-500">Book online 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Quick Response</h3>
                      <p className="text-sm text-gray-500">Same day appointments</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={assets.header_img}
                    alt="Physiotherapy Session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
    
}

export default Header;