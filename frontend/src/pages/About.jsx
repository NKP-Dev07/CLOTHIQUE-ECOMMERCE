import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import SubscribeSection from '../components/SubscribeSection';

function About () {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
 <Title text1={'ABOUT'} text2={ "US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
    <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
    <p className="text-gray-600">
  Clothique was created with a vision to make fashion accessible, stylish, and enjoyable for everyone. What started as a simple idea has grown into a platform where customers can discover carefully curated collections, explore the latest trends, and shop with confidence from anywhere.
</p>

<p className="text-gray-600 mt-4">
  At Clothique, we believe that fashion is more than just clothing—it's a way to express individuality and confidence. Our goal is to provide quality products, a seamless shopping experience, and a collection that helps every customer find their unique style while staying ahead of modern fashion trends.
</p>
    <b className='text-gray-800'>Our Mission</b>
    <p>Our mission at Clothique is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
    </div>
      </div>
      <div className='text-xl py-4'>
     <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance:</b>
      <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
      
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience:</b>
      <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
     
     
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional Customer Service:</b>
      <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>

      </div>
      <SubscribeSection/>
    </div>
  )
}

export default About ;
