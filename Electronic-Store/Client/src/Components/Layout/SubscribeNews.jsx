import React from 'react'

const SubscribeNews = () => {
  return (
    <div className='w-full  bg-[#23395B] flex items-center justify-center p-5 my-10 rounded-md '>
       <div className='flex-col'>
        <h2 className='text-xl text-[#FFFFFF] text-center font-bold my-10  '>Subscribe to our newsletter</h2>
       <div className='flex items-center gap-5 text-center my-5 '>
        <input type="text" placeholder='first name' 
        className='px-7 py-2 border-[1px] border-[#D4D4D8] outline-none bg-transparent rounded-sm text-white '/>
        <input type="email" placeholder='Email address'
        className='px-7 py-2 border-[1px] border-[#D4D4D8] outline-none bg-transparent rounded-sm text-white ' />
        <button className='bg-[#FFFFFF] text-black font-semibold text-sm px-5 py-2.5 rounded-sm'>
            Subscribe Now
        </button>
       </div>
       </div>
    </div>
  )
}

export default SubscribeNews