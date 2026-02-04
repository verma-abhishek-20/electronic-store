import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdOutlineStarPurple500 } from "react-icons/md";
import headphone from "../../assets/headphone.png";

const starList = [
  { star: <MdOutlineStarPurple500 /> },
  { star: <MdOutlineStarPurple500 /> },
  { star: <MdOutlineStarPurple500 /> },
  { star: <MdOutlineStarPurple500 /> },
  { star: <MdOutlineStarPurple500 /> },
];
const HeroSction = () => {
  const [IsDotActive, setIsDotActive] = useState(0);

  return (
    <div className="container relative bg-white p-20 mt-10 flex items-center justify-between rounded-lg ">
     
      <div className="left_side w-[35%] mt-20 ">  
        <h2 className="font-bold text-5xl text-[#131313]">
          SHOP COMPUTERS & ACCESSORIES
        </h2>
        <p className="w-[70%] my-4 text-sm font-semibold text-gray-500  ">
          Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and
          storage, accessories and more
        </p>
        <button className="px-5 py-2 text-xs bg-[#F8713A] text-white rounded-sm font-semibold ">
          Buy now
        </button>

        {/* ---------- for Dot Styling ---------*/}
        <div className="flex items-center gap-5 mt-16 ">
          {[0, 1, 2].map((dot, index) => (
            <span key={index} className={"w-4 h-4 border rounded-full flex items-center justify-center cursor-pointer "+ (IsDotActive===index? 'border-black ':'border-gray-400 ')}
            onClick={()=>setIsDotActive(index)}>
              <span
              key={index}
              onClick={() => setIsDotActive(index)}
              className={`w-2 h-2 rounded-full border cursor-pointer transition
              ${IsDotActive === index ? "bg-black border-black" : "bg-gray-400 border-gray-400"}`}
            />
            </span>
          ))}
        </div>
      </div>

      <div className="right_side ">
        <div className="relative">
          <div className="w-[350px] h-[200px] bg-[#EFEDEB] rounded-lg px-5 py-8 relative overflow-hidden top-12 right-60  ">
            <p className="text-[#000000] text-xs  ">Computer & Accessories</p>
            <h3 className="text-[#131313] font-bold text-sm my-2  ">
              SONY WH-CH510 Headset
            </h3>
            <div className="start_icon flex items-center gap-1  ">
              {starList.map((star,id) => (
                <div key={id} className="text-orange-400  ">{star.star}</div>
              ))}
              <span className="ml-2 mb-1 font-mono ">1245 reviews</span>
            </div>
            <div className="price my-2 ">
              <strike className="text-sm font-semibold text-gray-500">
                $52,000
              </strike>
              <p className="inline ml-2 text-black text-xl font-bold font-mono ">
                49,990/-{" "}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className=" text-sm font-semibold ">View more</p>
              <HiArrowLongRight className="mt-1 text-2xl" />
            </div>
          </div>

          <img
            src={headphone}
            alt="Headphone"
            className="absolute right-[10px] top-1/2 -translate-y-1/2 
             w-[520px] z-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSction;
