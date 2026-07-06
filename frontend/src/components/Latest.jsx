import React from 'react'
import Product from '../pages/Product'
import p_img47 from "../assets/p_img47.png"
import p_img8 from "../assets/p_img8.png"
import p_img14 from "../assets/p_img14.png"
import p_img35 from "../assets/p_img35.png"
import p_img15 from "../assets/p_img15.png"
import p_img6 from "../assets/p_img6.png"
import p_img51 from "../assets/p_img51.png"
import p_img50 from "../assets/p_img50.png"
import p_img39 from "../assets/p_img39.png"
import p_img36 from "../assets/p_img36.png"

{
/*
this file is not used instead of this we used Latest collection.jsx -- where are we passing props using context. not manually.
*/
}


function Latest  ()  {
  return (
    <div class='my-10'>
      <div>
 <div className='flex items-center justify-center mt-8'>
<span className='text-gray-600 text-2xl mr-4'>LATEST</span>
<span className='text-black-600 font-serif text-3xl'>COLLECTIONS</span>
<span className='w-10 h-[2px] bg-gray-600 ml-2 '></span>
 </div>
 <p className='mt-2 text-center'> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
 </div>

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-10'>

<Product name='kid Tapered Slim Fit Trouser'
price={38}
image={p_img47}
/>

<Product name='Men Round Pure Cotton T-shirt'
price={64}
image={p_img8}
/>

<Product name='Boy Round Neck Pure Cotton T-shirt'
price={60}
image={p_img14}
/>
<Product name='Women Zip-Front Relaxed Fit Jacket'
price={74}
image={p_img35}
/>

<Product name='Men Tapered Fit Flat-Front Trousers'
price={52}
image={p_img15}
/>

<Product name='Girls Round Neck Cotton Top'
price={52}
image={p_img6}
/>

<Product name='Women Zip-Front Relaxed Fit Jacket'
price={68}
image={p_img51}
/>

<Product name='kid Tapered Slim Fit Trouser'
price={40}
image={p_img50}
/>

<Product name='Men Printed Plain Cotton Shirt'
price={52}
image={p_img39}
/>

<Product name='Women Zip-Front Relaxed Fit'
price={78}
image={p_img36}
/>

</div>

    </div>
  )
}

export default Latest
