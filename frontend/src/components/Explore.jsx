import React from "react";
import MensPoster from "../assets/Images/mensPoster.jpg";
import Carousel from "./SubComponents/Carousel";
import poster2 from "../assets/Images/poster2.webp";
import ContactUsForm from "./SubComponents/ContactUsForm";

function Explore() {
  return (
    <div className="mt-16">
      {/* banner or video  */}
      <div className="w-full h-1/4 bg-black overflow-hidden relative">
        <img className="" src={MensPoster} />
        <div className="absolute top-3/4 w-4/12 ml-8 mt-14">
          <h1 className="text-white text-4xl tracking-widest">
            MENS CLOTHING.
          </h1>
        </div>
      </div>
      {/* result of the search */}
      <div className="w-full my-24  px-8">
        <div className="grid grid-cols-2 w-5/6 mx-auto gap-x-36 gap-y-12">
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>/
          </div>
        </div>
      </div>
      {/* again one banner */}
      <div className="relative px-8 my-24">
        <img src={poster2} className="" />
        <div className="absolute top-20 text-white w-2/4 ml-16">
          <h1 className="text-5xl font-bold tracking-wider text-black">
           EXCLUSIVE BRAND OFFERS
          </h1>
        </div>
      </div>
      {/* remaining product cards */}
      <div className="w-full my-24  px-8">
        <div className="grid grid-cols-2 w-5/6 mx-auto gap-x-36 gap-y-12">
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>
          </div>
          <div className="mt-3">
            <Carousel />
            <h1 className="mt-4 text-2xl cursor-pointer">Hooded Tech-Fleece Full-Zip</h1>
            <p className="mt-2 text-sm tracking-wider">$325.00</p>/
          </div>
        </div>
      </div>
      {/* contact form */}
      <ContactUsForm/>
    </div>
  );
}

export default Explore;
