import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongUp } from "react-icons/hi2";

const FAQ = () => {
  return (
    <div className="w-[45%] mx-auto my-5  ">
      <h2 className="text-2xl font-bold text-center my-5 ">Answers to our frequently asked questions</h2>

      <div className="flex items-center justify-between my-2">
        <h3 className="text-md font-bold  ">Is this product for me?</h3>
        <HiArrowLongRight className="text-2xl " />
      </div>
      <hr className="border-[1px] border-gray-400 " />

      <div className="my-4">
        <div className="flex items-center justify-between my-2 ">
        <h3 className="text-md font-bold  ">How many days will it take to deliver?</h3>
        <HiArrowLongUp className="text-2xl " />
        </div>
        <hr className="border-[1px] border-gray-400 " />

        <p className="text-xs font-semibold text-gray-400 my-4 ">
          Tailwind CSS is a CSS framework like Bootstrap, that speeds up
          development time for developers. Tailwind CSS uses classes to style
          elements, meaning you do not have to write any CSS.
        </p>
      </div>

      <div className="my-4 flex items-center justify-between">
        <h3 className="text-md font-bold  ">What is your return policy?</h3>
        <HiArrowLongRight className="text-2xl " />
      </div>
      <hr className="border-[1px] border-gray-400 " />

      <div className="my-4 flex items-center justify-between ">
        <h3 className="text-md font-bold  ">Can I change the delivery address after placing order?</h3>
        <HiArrowLongRight className="text-2xl " />
      </div>
       <hr className="border-[1px] border-gray-400 " />

      <button className="px-5 py-2 text-center border-[1px] border-black rounded-sm font-semibold text-sm flex ml-[50%] mt-5  ">
        view more
      </button>
    </div>
  );
};

export default FAQ;
