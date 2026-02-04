import React from 'react'
import {shopByCategories} from '../../assets/shopByCat'
import Item from './Item'


const ShopCategories = () => {

  return (
    <div className='w-full my-10 relative  '>
      <div className='feature_heading flex items-center justify-between '>
        <h2 className='text-lg font-bold text-black '>SHOP BY CATEGORIES</h2>
          <div className='flex gap-1  text-xs font-semibold '>
            <span>
              View all categories
            </span>
            <p>{">"}</p>
          </div>
      </div>  

      <div className=' '>
        <div className='flex items-center justify-center gap-5  '>
            {shopByCategories.map((data,id)=>(
            <Item key={id}  name={data.name} img={data.img} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default ShopCategories