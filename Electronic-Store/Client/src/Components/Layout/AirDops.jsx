import React from 'react'
import girl_airphone from '../../assets/girl_airphone.png';
import white_buds from '../../assets/white_airbuds.jpg';

const AirDops = () => {
  return (
    <div className='bg-[#E1E1E1] rounded-md p-2 flex items-center justify-between relative '>
      <div>
        <img src={girl_airphone} alt="" 
         className='rounded-md object-cover w-[571px] h-[404px] '
       />
      </div>
       <div className='w-[380px] h-[300px] absolute top-28 right-16 '>
        <h2 className='text-3xl font-bold   '>AirDrops {"("}2nd generation{")"}</h2>
        <p className='text-xs text-[#131313] my-2 font-semibold '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
        </p>
        <div className='flex gap-2 items-center my-2 font-semibold text-sm '>
            <span className='text-orange-500 pt-2'> * * * * *</span>
            <h4>1245 reviews</h4>
        </div>
        <div className='flex gap-2 font-semibold items-center my-2 '>
            <strike className='text-gray-400 text-sm ' >$52,000</strike>
            <h3 className=' font-semibold text-lg '>49,990</h3>
        </div>
        <button className='px-5 py-2 text-sm bg-black text-white rounded-md '>
            Buy now
        </button>
       </div>

       <div className='bg-white p-2 rounded-2xl w-[200px] h-[200px] absolute top-[27%] left-[40%]  '>
        <img src={white_buds} alt=""
        className='w-full h-full bg-cover  ' />
       </div>
    </div>
  )
}

export default AirDops