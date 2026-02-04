import React from 'react'
import headphone from '../../assets/headphone.png';
import watch from '../../assets/watch.png';
import { MdDelete } from "react-icons/md";
import { BsCheck2Square } from "react-icons/bs";
import Footer from './Footer';
import { RxCross2 } from "react-icons/rx";

const cartDetails=[
  {
    img:headphone,
    name:"SONY WH-CH510 Headset",
    color:"Color : red",
    price:"$450.99",
    proDet:"+ 50.99 2 years Product Insurance",
    qt:"2",
    Total:"$4901.98"
  },
   {
    img:watch,
    name:"Samsung Galaxy Watch2",
    color:"Color : Gray",
    price:"$300",
    proDet:"+ $10 2 years Product Insurance",
    qt:"1",
    Total:"$310"
  }
];

const Cart = () => {
  return (
   <div>
     <div className="p-20 relative ">
      <div className="mb-12 text-center mx-auto w-[500px]  ">
        <h2 className="text-3xl font-bold ">Shopping Cart</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className='w-full grid grid-cols-[2fr_1fr_1fr_1fr_1fr] my-2 text-md font-semibold  '>
        <h2>Product</h2>
        <h2>Price</h2>
        <h2>Qty</h2>
        <h2>Total</h2>
      </div>

      <div>
        {cartDetails.map((data,id)=>(
          <div className='my-4'>
            <hr className='border-[1px] border-gray-300 my-5 ' />
            <div className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr]'>
                <div className='flex items-center gap-2 '>
                    <div className='w-20 h-20 bg-gray-200 p-1 overflow-hidden rounded-lg flex items-center '>
                        <img src={data.img} alt="" 
                         className='w-full h-full rounded-sm object-contain '/>
                    </div>
                    <div className=' w-40'>
                        <h2 className='font-bold text-sm  '>{data.name}</h2>
                        <h4 className='text-gray-400 text-sm font-semibold my-1 '>{data.color}</h4>
                    </div>
                </div>

                <div className='w-32 '>
                    <h3 className='text-gray-400 text-sm '>{data.proDet}</h3>
                    <h4 className='font-bold mt-1 '>{data.price}</h4>
                </div>

                <div className='flex items-center gap-2'>
                    <button className='px-2  bg-gray-300 rounded-sm text-lg font-bold '> - </button>
                    <div className='font-semibold text-sm '> {data.qt} </div>
                    <button className='px-2  bg-gray-300 rounded-sm text-lg font-semibold '> + </button>
                </div>

                <div className='flex items-center gap-20 '>
                    <h2 className='text-lg font-bold '>{data.Total}</h2>
                </div>

                <div className='mt-5'>
                    <button className='px-2 py-2  bg-gray-300 rounded-sm font-semibold  '> 
                        <RxCross2 className='text-sm  ' />
                    </button>
                </div>

            </div>
          </div>
        ))}
      </div>

      <div className='w-24 h-10 bg-gray-300 absolute right-20 p-2  flex items-center gap-1 rounded-sm '>
        <MdDelete />
        <h3 className='text-sm font-semibold '>Clear all</h3>
      </div>

      <div className='bg-white p-7 rounded-md flex items-center justify-between mt-20  '>
        <div className='left_side w-96 '>
          <h2 className='text-lg font-semibold '>Choose your shipping method</h2>
          <div className='for_store p-2 '>
            <div className='flex items-center gap-2 mt-2 '>
              <div className='w-5 h-5 rounded-full border-[2px] border-gray-400 flex items-center justify-center  '>
                <div className='w-3 h-3 rounded-full bg-orange-600  '></div>
              </div>
              <h3 className='font-semibold '> Store pickup (In 20 min)
                <li className='inline font-bold text-sm ml-2 '>Free</li>
              </h3>
            </div>
          </div>
          <div className='for_delivery p-2 '>
            <div className='flex items-center gap-2 '>
              <div className='w-5 h-5 rounded-full border-[2px] border-gray-400 flex items-center justify-center  '>
                <div className='w-3 h-3 rounded-full bg-gray-400  '></div>
              </div>
              <h3 className='text-sm text-gray-400 mt-4 font-semibold'> Delivery at home (Under 2-3 days)
                <li className='inline font-bold text-sm ml-2 '>$9.90</li>
                 <h4 className='font-semibold trxt-xs text-gray-400 '> At 45 Glenridge ave, Brooklyn NY 11220 </h4>
              </h3>
            </div>
          </div>
        </div>
        <div className='right_side w-60 '>
          <div className='flex items-center justify-between '>
            <h3 className='text-sm  '>Sub Total</h3>
            <h4 className='font-bold text-sm'>$1954.97</h4>
          </div>
          <div className='flex items-center justify-between my-2 '>
            <h3>Shipping</h3>
            <h4 className='font-bold text-sm'>Free</h4>
          </div>
          <hr className='border-[1px] border-gray-400 my-2' />
          <div className='flex items-center justify-between '>
            <h3> Total</h3>
            <h4 className='font-bold text-sm'>$1954.97</h4>
          </div>

          <button className='w-full p-2 bg-orange-500 flex items-center justify-center gap-2 text-white font-semibold rounded-md my-5 '>
             <BsCheck2Square />
             <span className=''>Proceed to checkout</span>
          </button>
        </div>
      </div>

    </div>

    <Footer />
   </div>
  )
}

export default Cart