import React from 'react'
import girl_headset from '../../assets/girl_headphone.png';
import black_headphone from '../../assets/black_headphone.png';

const SonyHeadset = () => {
  return (
    <div className='bg-[#E1E1E1] rounded-md p-2 my-10 flex items-center justify-between relative '>
           <div className='w-[380px] h-[300px] ml-16 mt-16 '>
            <h2 className='text-3xl font-bold   '> SONY WH-CH510 Headset </h2>
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

            <div className=''>
             <img src={girl_headset} alt="" 
             className='rounded-md bg-cover w-[500px] h-[350px] '
           />
          </div>
    
           <div className='bg-white p-2 rounded-2xl w-[200px] h-[200px] absolute top-[27%] left-[40%]  '>
            <img src={black_headphone} alt=""
            className='w-full h-full bg-cover  ' />
           </div>
        </div>
      )
};

export default SonyHeadset;