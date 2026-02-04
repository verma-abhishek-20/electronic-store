import React from 'react'
import Item from './Item';
import { allProducts } from '../../assets/allProducts';

const FeatureProduct = () => {
  
  return (
    <div className='w-full my-10 relative  '>
      <div className='feature_heading flex items-center justify-between '>
        <h2 className='text-lg font-bold text-black '>FEATURED PRODUCT</h2>
        <div className='prev_next flex gap-5 '>
          <div className='prev_btn w-7 h-7 rounded-full border-[1px] text-sm border-black flex items-center justify-center '>
             {"<"}
          </div>
          <div className='next_btn w-7 h-7 rounded-full border-[1px] text-sm border-black flex items-center justify-center  '>
             {">"}
          </div>
        </div>
      </div>  

      <div className=' '>
        <div className='flex overflow-hidden relative items-center justify-center gap-5  '>
            {allProducts.map((data,id)=>(
            <Item key={id} title={data.title} name={data.name} rating={data.rating} price={data.price} img={data.image} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureProduct