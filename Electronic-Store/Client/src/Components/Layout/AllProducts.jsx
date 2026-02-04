import React from "react";
import { allProducts } from "../../assets/allProducts";
import Item from "./Item";
import Footer from "./Footer";
import { IoIosArrowDown } from "react-icons/io";

const allCategories = [
  { name: "Computer & Laptop", items: "25" },
  { name: "Mobile & Tablet", items: "125" },
  { name: "Camera", items: "150" },
  { name: " TV & Samrt Box", items: "75" },
  { name: "Home Appliance", items: "75" },
  { name: "Smart Watch", items: "45" },
  { name: "Microphone & Audio", items: "55" },
  { name: "Gaming", items: "40" },
  { name: "Printer", items: "14" },
  { name: "Accessories", items: "32" },
];

const AllProducts = () => {
  return (
    <div className="">
      <div className="my-16 text-center mx-auto w-[500px]  ">
        <h2 className="text-2xl font-bold ">All Products</h2>
        <p className="text-sm mt-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="flex mx-10 my-10  gap-5">
        <div className="w-[300px] h-[660px] border-[1px] border-gray-400 rounded-2xl p-4 ">
          <div className="flex items-center justify-between ">
            <h3>In stack only</h3>
            <div className="w-12 h-4 rounded-full relative bg-gray-300 my-2 ">
              <div className="w-4 h-4 rounded-full absolute bottom-[0.2px] left-1 bg-white "></div>
            </div>
          </div>

          <hr className="border-[1px] border-gray-400 my-5 " />

          <div className="  ">
            <h3 className="font-semibold my-2">All Categories</h3>
            {allCategories.map((itm, id) => (
              <div className="flex-col items-center ">
                <label key={id} className="">
                <input type="checkbox" className="mr-2" /> {itm.name}
                <span className="text-gray-400 text-sm ml-2 "> {"("}{itm.items}{")"} </span>
              </label>
              </div>
            ))}
            <p className="my-2">
              More Categories{" "}
              <span className="ml-2 text-gray-400 text-sm ">{"(10)"}</span>
            </p>
          </div>

          <hr className="border-[1px] border-gray-400 my-4 " />

          <div>
            <div className="flex items-center justify-between  ">
              <h3 className="font-semibold  ">Filter by Price</h3>
                <IoIosArrowDown />
            </div>
            <div className="my-4 ">
              <div className="w-[70%] h-1 rounded-full relative bg-red-500 my-2 ">
               <div className="w-4 h-4 rounded-full absolute bottom-[-5px] left-10 bg-white shadow-lg shadow-gray-600 "></div>
              </div>
              <h3 className="text-gray-400 font-bold mt-5 ">
                Price:{" "}
                <span className="text-black text-sm font-bold ">
                  $100 - $250
                </span>
              </h3>
            </div>
          </div>

          <hr className="border-[1px] border-gray-400 my-4 " />

          <div>
            <div className="flex items-center justify-between  ">
              <h3 className="font-semibold  ">Color</h3>
              <IoIosArrowDown />
            </div>
            <div className="flex items-center gap-2 my-5 ">
              <div className="w-8 h-8 rounded-full border-[1px] bg-blue-500 "></div>
              <div className="w-8 h-8 rounded-full border-[1px] bg-yellow-500 "></div>
              <div className="w-8 h-8 rounded-full border-[1px] bg-orange-500 "></div>
              <div className="w-8 h-8 rounded-full border-[1px] bg-green-500 "></div>
              <div className="w-8 h-8 rounded-full border-[1px] bg-purple-500 "></div>
              <div className="w-8 h-8 rounded-full border-[1px] bg-cyan-500 "></div>
              <div className="w-8 h-8 rounded-full border-[1px] bg-violet-800 "></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap overflow-hidden items-center justify-center gap-5  ">
          {allProducts.map((data, id) => (
            <Item
              key={id}
              title={data.title}
              name={data.name}
              rating={data.rating}
              price={data.price}
              img={data.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts;
