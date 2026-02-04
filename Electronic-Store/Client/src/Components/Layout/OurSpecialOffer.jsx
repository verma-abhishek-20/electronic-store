import React from "react";
import { specialOffer } from "../../assets/specialOffer";
import Item from "./Item";

const OurSpecialOffer = () => {
  return (
    <div className="w-full my-5  ">
      <div className=" flex items-center justify-between ">
        <h2 className="text-lg font-bold text-black ">OUR SPECIAL OFFER</h2>
        <div className=" flex items-center gap-2 ">
          <h3>Sale End In:</h3>
          <div className="border-[1px] p-2 border-black rounded-lg font-semibold ">
            <h2 className="text-orange-500 ">1</h2>
            <h3>Hrs</h3>
          </div>
          <div className="border-[1px] p-2 border-black rounded-lg font-semibold ">
            <h2 className="text-orange-500 ">54</h2>
            <h3>Min</h3>
          </div>
          <div className="border-[1px] p-2 border-black rounded-lg font-semibold ">
            <h2 className="text-orange-500 ">26</h2>
            <h3>Sec</h3>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden items-center justify-center gap-5  ">
        {specialOffer.map((data, id) => (
          <Item
            key={id}
            title={data.title}
            name={data.name}
            rating={data.ratings}
            price={data.price}
            newPrice={data.newPrice}
            img={data.image}
          />
        ))}
      </div>

      <button className="bg-transparent border-[1px] text-sm border-black font-semibold my-5 px-5 py-2 rounded-sm ml-[50%] ">
        Shop now
      </button>
    </div>
  );
};

export default OurSpecialOffer;
