import React from 'react'

import p_img2_2 from '../assets/p_img2_2.png'
import hero_img from '../assets/hero_img.png'

function Hero () {
  return (
   <div className='flex flex-col sm:flex-row border border-gray-400'  >
   
       <div className="w-full sm:w-1/2 flex items-center  justify-center py-10 sm:py-0">
       <div className='text-center space-y-4 '>
         <div className='flex items-center justify-center gap-4'>
         
         <span className="w-10 h-[2px] bg-gray-500"></span>
   
       <p className='text-sm tracking-widest text-gray-600'> OUR BESTSELLERS</p>
       </div>
         <p className=" text-4xl font-serif mb-4 ">
           Latest Arrivals
         </p>
         <div className='flex items-center justify-center gap-3'>
         <p className='text-sm font-semibold'>SHOP NOW</p>
         <span className='w-10 h-[2px] bg-gray-600 '></span>
         </div>
         
         </div>
       </div>
       
        
         <img src={hero_img} alt="" className='w-full sm:w-1/2'/>
        
   
         </div>
  )
}

export default Hero
