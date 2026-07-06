import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
function BestSellers()  {
   const {products} =useContext(ShopContext);
  const [bestSeller ,setBestSeller] =useState([]);

  useEffect(() => {

  const bestProduct = products.filter((item) => item.bestseller);

  setBestSeller(bestProduct.slice(0, 5));
}, [products]);

  // console.log("Products:", products);
  // console.log("Best Sellers:", bestSeller);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl'>
      <Title text1={'BEST'} text2={'SELLERS'}/>
      <p className='text-sm mt-1'>Explore our most loved products, chosen by customers for their quality, style, and comfort. These best-selling favorites are designed to help you look and feel your best every day.</p>
      </div>

{/*rendering best selling products */}

<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

{bestSeller.map((item,index)=>(
 <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
))}

</div>

    </div>
  )
}

export default BestSellers ; 
