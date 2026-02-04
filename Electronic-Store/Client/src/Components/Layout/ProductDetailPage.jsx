import React from "react";
import { FiShare2 } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { FaDiceD6 } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidCommentDots } from "react-icons/bi";
import headphone from "../../assets/headphone.png";
import img1 from "../../assets/small_img/img1.png";
import img2 from "../../assets/small_img/img2.png";
import img3 from "../../assets/small_img/img3.png";
import girl from "../../assets/girl.jpg";
import boy from '../../assets/boy.jpg';
import man from '../../assets/man.jpg';
import { allProducts } from "../../assets/allProducts";
import Item from "./Item";
import Footer from "./Footer";

const star = [
  { title: <IoIosStar /> },
  { title: <IoIosStar /> },
  { title: <IoIosStar /> },
  { title: <IoIosStar /> },
  { title: <IoIosStar /> },
];

const personFeedback = [
  {
    name: "Kristin Watson",
    feed: "A  Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These Sweet Mornings Of Spring Which I Enjoy With My Whole Heart",
    rating: <IoIosStar />,
    img:girl,
  },
  {
    name: "Kristin Watson",
    feed: "A  Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These Sweet Mornings Of Spring Which I Enjoy With My Whole Heart",
    rating: <IoIosStar />,
    img:man,
  },
  {
    name: "Kristin Watson",
    feed: "A  Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These Sweet Mornings Of Spring Which I Enjoy With My Whole Heart",
    rating: <IoIosStar />,
    img: boy,
  },
];

const ProductDetailPage = () => {
  return (
    <div className="">
      <div className="p-10">
        <div className="flex justify-around  my-10  ">
          <div className="img_container   ">
            <div className="w-[600px] h-[500px] overflow-hidden p-32 bg-gray-300 flex items-center justify-center text-sm rounded-lg ">
              <img
                src={headphone}
                alt=""
                className=" overflow-hidden object-cover  "
              />
            </div>
            <div className="my-4 flex items-center justify-center gap-5 ">
              <div className="prev_btn w-7 h-7 cursor-pointer rounded-full border-[1px] text-sm border-black flex items-center justify-center ">
                <MdKeyboardArrowLeft />
              </div>
              <div className="w-20 h-20 bg-gray-300 cursor-pointer flex items-center justify-center text-sm rounded-lg ">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-full overflow-hidden object-cover rounded-lg  "
                />
              </div>
              <div className="w-20 h-20 bg-gray-300 cursor-pointer flex items-center justify-center text-sm rounded-lg ">
                <img
                  src={img2}
                  alt=""
                  className="w-full h-full overflow-hidden object-cover rounded-lg "
                />
              </div>
              <div className="w-20 h-20 bg-gray-300 cursor-pointer flex items-center justify-center text-sm rounded-lg ">
                <img
                  src={img3}
                  alt=""
                  className="w-full h-full overflow-hidden object-cover rounded-lg "
                />
              </div>
              <div className="prev_btn w-7 h-7 cursor-pointer rounded-full border-[1px] text-sm border-black flex items-center justify-center ">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>

          <div className="w-[600px]  ">
            <h2 className="text-3xl font-bold my-2 ">SONY WH-CH510 Headset</h2>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-5 ">
                <h3 className="font-semibold text-sm text-gray-400 ">
                  {" "}
                  $52,000{" "}
                  <span className="font-bold text-lg text-black ">
                    49,990/-{" "}
                  </span>{" "}
                </h3>
                <div className="border-[1px] border-orange-500 text-orange-500 px-5 py-1 rounded-md font-semibold ">
                  <h4>save 50% </h4>
                </div>
              </div>
              <div className="flex items-center gap-1 text-orange-400  font-bold ">
                <IoIosStar />
                <span> 4.5 </span>
              </div>
            </div>
            <div className="flex items-center text-sm font-semibold gap-7 mt-7 ">
              <div className="flex items-center gap-1 ">
                <BsCheck2Circle className="text-xl text-orange-500  " />
                <h3> 3 years warranty </h3>
              </div>
              <div className="flex items-center gap-1 ">
                <CiDeliveryTruck className="text-2xl text-orange-500  " />
                <h3> Free Delivery </h3>
              </div>
              <div className="flex items-center gap-1 ">
                <FaDiceD6 className="text-xl text-orange-500 " />
                <h3> In Stock </h3>
              </div>
            </div>

            <hr className="border-[1px] border-gray-400 my-4" />

            <div>
              <h2 className="font-semibold  ">Colors</h2>
              <div className="flex gap-5 items-center my-1 ">
                <div className="w-8 h-8 bg-red-500 rounded-sm "></div>
                <div className="w-8 h-8 bg-black rounded-sm "></div>
                <div className="w-8 h-8 bg-cyan-500 rounded-sm "></div>
                <div className="w-8 h-8 bg-green-400 rounded-sm "></div>
              </div>
            </div>

            <div className="my-4">
              <h4 className="font-semibold ">Description</h4>
              <p className="text-sm my-2 ">
                Wireless Microphone with the new style, shockproof, clear voice
                reception that suitable for recording, online meeting, vlogging,
                and calling. Free casing with high-quality zipper.
              </p>
            </div>

            <div className="flex items-center gap-5 ">
              <button className="px-7 py-2 bg-orange-500 rounded-sm text-white text-sm ">
                Add to cart
              </button>
              <div className="border-[1px] border-orange-600 text-orange-600 px-7 py-2 text-sm ">
                Add to Wishlist
              </div>
              <div className="text-lg font-semibold flex gap-1 items-center justify-center ">
                <FiShare2 className="w-8 h-8 bg-gray-300 rounded-sm p-2  " />
                <span className="text-sm font-bold ">Share</span>
              </div>
            </div>

            <div className="my-5">
              <h3 className="text-sm font-semibold "> Tech Spaces </h3>
              <hr className="border-[1px] border-gray-400 mt-4 " />
              <div className="p-4">
                <li className="text-sm ">
                  Comfort : Lightweight, all-day listening with quality sound
                </li>
                <li className="text-sm ">
                  Bluetooth : Listen to your favourite tracks wirelessly with a
                  Bluetooth wireless technology by pairing your smartphone or
                  tablet.
                </li>
                <li className="text-sm ">
                  Battery Life : With up to 35 hours of battery life, you’ll
                  have enough power for even long trips away.
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews_heading   ">
          <h2 className="text-2xl text-[#F8713A] font-bold ">Reviews</h2>
          <hr className="my-2 border-[1px] border-gray-300 " />
          <div className="flex justify-between mt-10 ">
            <div className="left_reviews w-[500px] p-5 ">
              <div className="people_feedback my-2 ">
                <div className="">
                  {personFeedback.map((data, id) => (
                    <>
                      <div className="flex items-center gap-2 ">
                        <img
                          src={data.img}
                          alt=""
                          className="w-16 h-16 rounded-lg object-cover  "
                        />
                        <div>
                          <h4 className="text-sm font-semibold ">
                            {data.name}
                          </h4>
                          <div className="flex items-center gap-1 mt-1 ">
                            {star.map((itm, id) => (
                              <span className="text-orange-500">
                                {" "}
                                {itm.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm mt-1 ">
                        {data.feed}
                      </p>
                      <div className="flex items-center gap-4 mt-2 mb-7 ">
                        <div className="flex items-center gap-1">
                          <AiOutlineLike className="text-2xl" />
                          <span>34</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BiSolidCommentDots className="text-xl" />
                          <span>Reply</span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="right_reviews w-[500px] p-5 ">
              <h2 className="text-xl font-bold  ">Add Your Review</h2>
              <p className="my-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>

              <label>
                Name*
                <input
                  type="text"
                  className="block w-full p-2 my-2 border-[1px] border-gray-400 rounded-md bg-white outline-none "
                />
              </label>
              <label>
                Email*
                <input
                  type="email"
                  className="block w-full p-2 my-2 border-[1px] border-gray-400 rounded-md bg-white outline-none "
                />
              </label>
              <label>
                Review*
                <input
                  type="text"
                  className="block w-full p-8 my-2 border-[1px] border-gray-400 rounded-md bg-white outline-none "
                />
              </label>
              <label>
                Rating:
                <div className="flex items-center gap-2 mt-2 ">
                  {star.map((itm, id) => (
                    <span className="text-gray-400 text-xl "> {itm.title}</span>
                  ))}
                </div>
              </label>

              <button className="border-[1px] border-orange-500 rounded-sm px-5 py-1 mt-5 font-semibold text-orange-500 ">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-[#F8713A] font-bold ">
            Related Products
          </h2>
          <hr className="my-2 border-[1px] border-gray-300 " />

          <div className="flex overflow-hidden relative items-center justify-center gap-5 mt-10  ">
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
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
