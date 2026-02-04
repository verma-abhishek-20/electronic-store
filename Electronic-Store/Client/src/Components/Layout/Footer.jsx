import React from "react";
import masterCard from '../../assets/mastercard.png';
import vector from '../../assets/vector.png';
import discover from '../../assets/discover.png';
import amex from '../../assets/amex.png';
import visa from '../../assets/visa.png';
import paypal from '../../assets/paypal.png'
import { FaFacebook } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const company=[
    {title:" About "},
    {title:" Features "},
    {title:" Works "},
    {title:" Carreer "},
];
const help=[
    {title:" Customer Support "},
    {title:" Delivery Details "},
    {title:" Terms & Conditions  "},
    {title:" Privacy Policy  "},
];

const resources=[
    {title:" Free eBooks"},
    {title:" Development Tutorial "},
    {title:" How to - Blog "},
    {title:" Youtube Playlist "},
];

const creditCard=[
    {cardName:"visa", img:visa },
    {cardName:"fast", img:masterCard },
    {cardName:"amex", img: amex },
    {cardName:"paypal", img:paypal },
    {cardName:"dobby", img:vector },
    {cardName:"discover", img:discover },
];

const Footer = () => {
  return (
    <div className="mb-[-25px] mt-auto w-full bg-black ">
      <div className="w-[95%] mx-auto  p-12 ">
        <div className="flex items-center justify-between text-white ">
          
          <div className="first_box w-60 ">
            <h2 className=" font-semibold text-lg text-gray-100">Current<span className="text-orange-600">Realm</span></h2>
            <p className="text-xs my-2 font-semibold text-gray-400  list-none">
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </p>
            <div className="web_icon flex items-center gap-4 mt-5 ">
              <div className="w-9 h-9 rounded-full border-[2px] border-white flex items-center justify-center   ">
                <SlSocialTwitter className="text-sm text-white "  />
              </div>
              <div className="w-9 h-9 rounded-full flex items-center justify-center   ">
                <FaFacebook  className=" w-full h-full "  />
              </div>
              <div className="w-9 h-9 rounded-full border-[2px] border-white flex items-center justify-center   ">
                <FaInstagram className="text-2xl "  />
              </div>
              <div className="w-9 h-9 rounded-full border-[2px] border-white flex items-center justify-center   ">
                <SiGithub className="text-sm "  />
              </div>
             
            </div>
          </div>

          <div className="sec_box ">
            <h3 className=" font-semibold text-sm text-gray-100 ">COMPANY</h3>
            {company.map((itm,id)=>(
                <li key={id} className="text-xs font-semibold my-2 text-gray-400  list-none ">{itm.title}</li>
            ))}
          </div>

          <div className="third_box">
            <h3 className=" font-semibold text-sm text-gray-100  ">HELP</h3>
             {help.map((itm,id)=>(
                <li key={id} className="text-xs font-semibold my-2 text-gray-400  list-none ">{itm.title}</li>
            ))}

          </div>
          

          <div className="fourth_box">
            <h3 className=" font-semibold text-sm text-gray-100 ">RESOURCES</h3>
             {resources.map((itm,id)=>(
                <li key={id} className="text-xs font-semibold my-2 text-gray-400 list-none ">{itm.title}</li>
            ))}

          </div>
        </div>

        <hr className="border-[1px] border-gray-500 mt-7   " />

        <div className="flex items-center justify-between pt-2  ">
          <div className="border-[1px] border-gray-400 rounded-sm  px-1 py-1  ">
            <select className="bg-transparent text-white text-sm outline-none " >
                <option className="text-sm">India</option>
                <option className="text-sm">USA</option>
                <option className="text-sm">China</option>
                <option className="text-sm">Netherlands</option>
            </select>
          </div>
          <div>
            <p className="text-gray-500 text-xs  ">
                © Copyright 2026, All Rights Reserved by Elsner Technologies
            </p>
          </div>
          <div className=" flex items-center gap-3  ">
            {creditCard.map((itm,id)=>(
                <img key={id} src={itm.img} alt="card_pic" 
                 className="w-full h-full object-cover overflow-hidden rounded-sm " />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
