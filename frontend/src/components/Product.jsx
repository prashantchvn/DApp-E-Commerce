import React from "react";
import poster1 from "../assets/Images/poster1.webp";
import ContactUsForm from "./SubComponents/ContactUsForm";

function Product() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2">
        <div>
          {/* carousel */}
          <h1>carousel</h1>
        </div>
        <div>
          <h1 className=" text-4xl top-border mr-8 pt-4 tracking-wider">
            Walsh Full-Zip
          </h1>
          <div className="w-3/4 mt-4">
            <p className="text-sm tracking-widest mr-23">
              Crafted from 100% recycled polyester Polartec® Thermal Pro®
              fabric, the Walsh Full-Zip is our modern take on the classic
              outdoor fleece for the eco-conscious adventurer.
            </p>
          </div>
          <p className="mt-2 text-sm tracking-wider">$325.00</p>
          {/* <div>
            <p className="uppercase">AVAILABLE COLOR OPTIONS</p>
            <div className="flex mt-2">
              <button className="bg-yellow-800 w-5 h-5 rounded-full" />
              <button className="bg-yellow-800 w-5 h-5 ml-6 rounded-full" />
              <button className="bg-yellow-800 w-5 h-5 ml-6 rounded-full" />
            </div>
          </div> */}
          <p className="text-sm font-thin tracking-widest mt-8">SELECT SIZE</p>
          <div className="flex my-3">
            <label className="rounded-full px-3 cursor-pointer hover:bg-black hover:text-white   h-8 py-2 text-xs align-middle black-border">
              XS
            </label>
            <label className="rounded-full px-3 cursor-pointer hover:bg-black hover:text-white ml-4 h-8 py-2 text-xs align-middle black-border">
              S
            </label>
            <label className="rounded-full px-3 cursor-pointer hover:bg-black hover:text-white ml-4 h-8 py-2 text-xs align-middle black-border">
              M
            </label>
            <label className="rounded-full px-3 cursor-pointer hover:bg-black hover:text-white ml-4 h-8 py-2 text-xs align-middle black-border">
              L
            </label>
            <label className="rounded-full px-3 cursor-pointer hover:bg-black hover:text-white ml-4 h-8 py-2 text-xs align-middle black-border">
              XL
            </label>
            <label className="rounded-full px-3 cursor-pointer hover:bg-black hover:text-white ml-4 h-8 py-2 text-xs align-middle black-border">
              XXL
            </label>
          </div>
          <button className="bg-black text-left pl-10 mt-2 w-4/6 rounded-full h-12 text-white tracking-widest text-md font-thin form-button mb-8">
            ADD TO CART
          </button>
          <div className="top-border mr-8 pt-2 mt-6">
            <h1 className="tracking-wider text-xl"> TECHNICAL FEATURES </h1>
            <div className="grid grid-cols-6 mt-2">
              <p className="text-xs font-thin tracking-widest">SUSTAINABLE</p>
              <p className="text-xs font-thin tracking-widest">REGULAR FIT</p>
              <p className="text-xs font-thin tracking-widest">
                PREMIUM QUALITY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-20 relative mx-8">
          <img src={poster1} />
          <div className="absolute top-2/4 text-white w-2/4 ml-16">
            <h1 className="text-5xl font-bold tracking-widest text-white">
              Maximum protection, minimal design.
            </h1>
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
}

export default Product;
