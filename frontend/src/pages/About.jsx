import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className=' text-center text-3xl pt-0 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src='https://static.wixstatic.com/media/077502_1e4de9bf9f684a5789da251c8d9bb272~mv2.png/v1/fill/w_324,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/our-services-1.png' alt="" />
        <div className='leading-6 text-justify flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>In a world that often prioritizes quick fixes and temporary relief, physiotherapy stands as a beacon of hope for individuals seeking lasting health and well-being. Rapid access to musculoskeletal physiotherapy can significantly reduce the downtime due to injuries and prevent acute issues from evolving into chronic, long-lasting problems. Whether it's an injury, illness, or disability, physiotherapy aims to restore an individual's movement and function. One of the lesser-known but immensely valuable aspects of physiotherapy is its role in disease prevention. When people have easy access to physiotherapy, it minimizes unnecessary doctor's appointments and secondary care visits. Embracing the power of physiotherapy can be the first step toward a healthier, happier future.</p>
          <b className='text-gray-800'>OUR SERVICES</b>
          <p>Our experienced physical therapists offer a comprehensive wide range of
physical therapy services to help and improve restore the function of our
patients after injury, surgery, and illness.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='text-4xl my-4 text-center'>
        <p>Why  <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>
      <div>
        <img src="https://static.wixstatic.com/media/077502_295ebf60ac6e4cf2bbe370290bcc71d9~mv2.jpg/v1/fill/w_1899,h_545,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/077502_295ebf60ac6e4cf2bbe370290bcc71d9~mv2.jpg" alt="" />
      </div>
      

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 sm:py-16 flrx flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 sm:py-16 flrx flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 sm:py-16 flrx flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About