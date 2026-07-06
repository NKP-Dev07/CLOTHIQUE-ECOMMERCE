import React from 'react'
import exchange_icon from '../assets/exchange_icon.png'
import quality_icon from '../assets/quality_icon.png'
import support_img from '../assets/support_img.png'
function WhyDiffer  ()  {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12  sm:gap-2 py-20 text-center text-xs sm:text-sm md:text-base text-gray-700 '>
      <div className=''>
    <img className='w-12 m-auto mb-5' src={exchange_icon} alt=''/>
    <p className='font-semibold'>Easy Exchange Policy</p>
    <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
  
  {/*2nd -compo */}
    <div>
    <img   className='w-12 m-auto mb-5' src={quality_icon} alt=''/>
    <p className='font-semibold'>7 Days Return Policy</p>
    <p className='text-gray-400'>We provide 7 days free return policy

</p>
      </div>

      { /*3rd-compo */}
        <div>
    <img  className='w-12 m-auto mb-5' src={support_img} alt=''/>
    <p className='font-semibold'>Best customer support</p>
    <p className='text-gray-400'>we provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default WhyDiffer
