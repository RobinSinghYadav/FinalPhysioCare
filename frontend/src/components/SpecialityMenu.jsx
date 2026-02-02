// import React from 'react'
// import { specialityData } from '../assets/assets'
// import {Link} from 'react-router-dom'
// const SpecialityMenu = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' id='speciality '>
//         <h1 className='text-3xl font-medium '>Find by Speciality</h1>
//         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted Therapists, schedule your appointment hassle-free.</p>
        
//         <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
//             {specialityData.map((item, index) => (
//                 <Link onClick={()=>{scrollTo(0,0)}} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                    
//                         <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
//                         <p>{item.speciality}</p>
                    
//                 </Link>
//             ))}
//         </div>
        
//     </div>
//   )
// }

// export default SpecialityMenu

// import React from 'react';
// import { motion } from 'framer-motion';
import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const SpecialityMenu = () => {
//   const fadeInVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div
//       className="flex flex-col items-center gap-4 py-16 text-gray-800"
//       id="speciality"
//     >
//       <motion.h1
//         className="text-3xl font-medium"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         variants={fadeInVariants}
//       >
//         Find by Speciality
//       </motion.h1>

//       <motion.p
//         className="sm:w-1/3 text-center text-sm"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         variants={fadeInVariants}
//       >
//         Simply browse through our extensive list of trusted Therapists, schedule
//         your appointment hassle-free.
//       </motion.p>

//       <motion.div
//         className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, delay: 0.4 }}
//         variants={fadeInVariants}
//       >
        // {specialityData.map((item, index) => (
//           <Link
//             onClick={() => {
//               scrollTo(0, 0);
//             }}
//             className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
//             key={index}
//             to={`/doctors/${item.speciality}`}
//           >
//             <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
//             <p>{item.speciality}</p>
//           </Link>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default SpecialityMenu;




import React from 'react';
import { Activity, PersonStanding as UserStanding, Dumbbell, Move, StretchVertical as Stretch, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function SpecialityMenu() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const categories = [
    {
      title: 'Posture Correction',
      description: 'Improve your posture and alignment',
      icon: UserStanding,
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200',
      hoverColor: 'hover:bg-emerald-100',
      speciality: 'Posture Correction Exercises'
    },
    {
      title: 'Mobility Exercises',
      description: 'Enhance range of motion and flexibility',
      icon: Move,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:bg-blue-100',
      speciality: 'Mobility Exercises'
    },
    {
      title: 'Balance & Coordination',
      description: 'Improve stability and body control',
      icon: Activity,
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:bg-purple-100',
      speciality: 'Balance and Coordination Exercises'
    },
    {
      title: 'Strengthening Exercise',
      description: 'Build muscle strength and endurance',
      icon: Dumbbell,
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:bg-orange-100',
      speciality: 'Strengthening Exercise'
    },
    {
      title: 'Stretching Exercises',
      description: 'Improve flexibility and reduce tension',
      icon: Stretch,
      color: 'bg-rose-50',
      iconColor: 'text-rose-600',
      borderColor: 'border-rose-200',
      hoverColor: 'hover:bg-rose-100',
      speciality: 'Stretching Exercises'
    },
    {
      title: 'Core Stability',
      description: 'Strengthen your core muscles',
      icon: Shield,
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      borderColor: 'border-cyan-200',
      hoverColor: 'hover:bg-cyan-100',
      speciality: 'Core Stability Exercises'
    },
  ];

  return (
    <div className="py-16 mt-10 bg-gray-50" id="speciality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
  className="text-center mb-16"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariants}
  transition={{ duration: 0.5 }}
>
  <div className="flex items-center justify-center gap-4">
    <div className="w-12 h-1 bg-gray-400"></div>
    <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
      Find by Speciality
    </h1>
    <div className="w-12 h-1 bg-gray-400"></div>
  </div>

  <motion.p 
    className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    variants={fadeInVariants}
  >
    Simply browse through our extensive list of trusted Therapists, 
    schedule your appointment hassle-free.
  </motion.p>
</motion.div>


        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          variants={fadeInVariants}
        >
          {categories.map((category) => (
            <Link
              key={category.title}
              to={`/doctors/${category.speciality}`}
              onClick={() => {
                scrollTo(0, 0);
              }}
              className={`relative group rounded-2xl p-6 ${category.color} border ${category.borderColor} transition-all duration-300 ${category.hoverColor} transform hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${category.color} ${category.iconColor}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`${category.iconColor}`}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SpecialityMenu;