import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router';


const Navbar = () => {
  const [active,setActive]=useState(false);
  
  return (
    <div className=' pt-5 px-20 bg-[#F4F2F0] '>
      
      <div className='nav flex items-center justify-between   '>
         <div className='left_side flex gap-10 '>
            <div className='logo font-semibold '>
              <Link to={'/'}>
                <h2 className='text-2xl cursor-pointer '>Current
                <span className=' text-orange-500 font-bold '>Realm</span>
              </h2>
              </Link>
            </div>
            <li className='list-none font-semibold flex items-center gap-5 text-sm   '>
              <Link to={'/allproducts'}>
                <h4 className='cursor-pointer'>All Products</h4>
              </Link>
              <h4 className='cursor-pointer'>Contact</h4>
              <h4 className='cursor-pointer'>About us</h4>
              <h4 className='cursor-pointer'>Blog</h4>
            </li>
         </div>
         <div className='right_side flex items-center gap-10 '>
           <div className='search_input p-2 border-[1px] border-gray-400 flex items-center gap-2 rounded-[5px] '>
              <CiSearch className='text-2xl' />
              <input type="text"
              placeholder='Search for products'
              className=' outline-none bg-transparent w-full placeholder:font-normal text-sm placeholder:text-gray-400  ' />
           </div>
           <div className='icon flex items-center gap-7 text-gray-700 text-2xl  '>
              <Link to={'/cart'}>
                <MdDelete className='cursor-pointer' />
              </Link>
              <Link to={'/productDet'}>
                <FaRegHeart className={'cursor-pointer ' + (active? 'text-red-600':'') }
                onClick={()=>setActive(!active)}/>
              </Link>
              <GrUserManager className={'cursor-pointer '} />
           </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar