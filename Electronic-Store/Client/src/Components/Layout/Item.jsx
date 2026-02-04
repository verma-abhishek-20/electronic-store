import React from 'react'
import { IoIosHeart } from "react-icons/io";
import watch from '../../assets/watch.png'

const Item = (props) => {
  return (
    <div className=' w-[250px] h-[300px] rounded-md relative  bg-white   '>
       <div className=''>
        <img src={props.img} alt="" 
        className='w-full h-[220px] object-cover  '/>
       </div>
       <div className='pro_title ml-5'>
        <div className='flex items-center  gap-10'>
          <span className='text-xs text-gray-500  '>{props.title? props.title : 'mt-10'}</span>
        </div>
        <h3 className='text-sm text-black font-semibold mt-1 '>{props.name}</h3>
       </div>
       <div className='pro_price flex items-center ml-5 '>
         <strike className='font-semibold text-gray-400 text-sm mt-1 '>{props.price? props.price : ''}</strike>
         <h2 className='ml-1 text-md font-semibold  '>{props.newPrice? props.newPrice : <span className={" text-orange-500 ml-5 "}>{props.rating? '* * * * *' : ''}</span> }
         </h2>
       </div>

       <IoIosHeart className='absolute right-5 top-5 text-gray-400 text-lg ' />
    </div>
  )
}

export default Item