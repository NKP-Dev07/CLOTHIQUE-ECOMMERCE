import React from 'react'
import logo1 from '../assets/logo1.png'
function Footer  ()  {
  return (

    <div>
   

    <div className='flex flex-col sm:flex-row gap-14 my-10 mt-40 text-sm'>
      
<div>
  <img className='mb-5 w-44' src={logo1} alt=''/>
  <p className="text-sm text-gray-500 mb-4 italic">
  Wear Your Style
</p>

  <p className='w-full md:w-2/3 text-gray-600'>Clothique brings modern fashion and timeless style together.
Shop quality clothing designed for comfort, confidence, and elegance.</p>
</div>

<div>
  <p className='text-xl font-medium mb-5'>COMPANY</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
  </ul>
</div>

<div>
  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
 <ul className='flex flex-col gap-1 text-gray-600'>
  <li>+1-212-456-7890</li>
  <li>contact@clothique.com</li>
 </ul>
</div>

 </div>

<div>
  <hr/>
  <p className='py-5 text-sm text-center'>Copyright 2026@ clothique.com -All Right Reserved</p>
</div>

    </div>
  )
}

export default Footer
