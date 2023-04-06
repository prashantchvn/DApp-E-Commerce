import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/videos/high.mp4";
import Jacket from "../assets/Images/jacket.webp";
import poster1 from "../assets/Images/poster1.webp";
import poster2 from "../assets/Images/poster2.webp";
import contactUsPoster from "../assets/Images/contactUs.webp";
import kidsPoster from "../assets/Images/kidsPoster.webp";

const Home = () => {
  const [season, setSeason] = useState({
    title: "Summer",
    description:
      "Welcome to a new season; our summer collection features items for adventure, elevated casual wear, and protection ",
    link: "summer",
  });

  return (
    <div className="mt-10">
      <div className="w-full">
        <video
          className=""
          loop
          autoPlay
          muted
          title="People walking along sand dunes."
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* <div className="poster w-4/12 ml-12">
          <h1 className="text-white text-bold text-5xl">{season.title} is here.</h1>
          <p className="text-white text-thin text-sm tracking-widest season-description w-5/6 mt-2">{season.description}</p>
          <button className="rounded-full border px-4 align-middle h-10 uppercase mt-2 border-2 border-white">
            <p className="text-white text-xs tracking-widest">Exlore new {season.title} style</p>
          </button>
        </div> */}
      </div>
      {/* deals of the day */}
      <div className="w-full my-32 px-8">
        <h1 className="text-4xl pt-4 top-border">DEAL'S OF THE DAY</h1>
        <div className="grid grid-cols-4 gap-4 w-full">
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
          </div>
        </div>
      </div>
      {/* poster for mens and women */}
      <div>
        <div className="mt-20 relative">
          <img src={poster1} />
          <div className="absolute top-2/4 text-white w-2/4 ml-16">
            <h1 className="text-5xl font-bold tracking-widest text-white">
              Maximum protection, minimal design.
            </h1>
            <button className="rounded-full border px-3 align-middle h-10 uppercase mt-2  border-2 outline-black border-black">
              <p className="text-white text-xs tracking-widest">
                Explore the men's Jackets
              </p>
            </button>
            <br />
            <button className="rounded-full border px-3 align-middle h-10 uppercase mt-2  border-2 outline-black border-black">
              <p className="text-white text-xs tracking-widest">
                Explore the women's Jackets
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* Exclusive brands Offer*/}
      <div className="w-full my-32 px-8">
        <h1 className="text-4xl pt-4 top-border">EXCLUSIVE BRAND OFFER'S</h1>
        <div className="grid grid-cols-4 gap-4 w-full">
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
        </div>
      </div>
      {/* second poster */}
      <div className="relative px-8 my-24">
        <img src={poster2} className="" />
        <div className="absolute top-20 text-white w-2/4 ml-16">
          <h1 className="text-5xl font-bold tracking-wider text-black">
            {season.title} packing list.
          </h1>
          <button className="rounded-full px-3 align-middle h-10 uppercase mt-4 border-2 border-black ">
            <p className="text-black text-xs tracking-widest">
              Explore the men's Jackets
            </p>
          </button>
          <br />
          <button className="rounded-full px-3 align-middle h-10 uppercase mt-2  border-2 outline-black border-black">
            <p className="text-black text-xs tracking-widest">
              Explore the women's Jackets
            </p>
          </button>
        </div>
      </div>
      {/* contact us email form */}
      <div className="w-full bg-gray-100 px-24 py-24 grid grid-cols-5 gap-4">
        <div className="col-span-2 block">
          <h1 className="text-4xl ">
            Join our email list and receive exclusive updates.
          </h1>
          <input
            placeholder="Email address"
            className="w-3/4 h-12 align-middle px-8 mt-4 rounded-full mr-22 email-input font-lg"
            type="text"
          />
          <div className="flex mt-1 ml-2">
            <div className="mx-2">
              <input type="checkbox" id="men" name="men" value="men" />
              <label className=" ml-1 text-xs align-middle mt-1 pt-1" for="men">
                {" "}
                MEN
              </label>
            </div>
            <div className="mx-2">
              <input type="checkbox" id="womens" name="womens" value="womens" />
              <label
                className=" ml-1 text-xs align-middle mt-1 pt-1"
                for="womens"
              >
                {" "}
                WOMENS
              </label>
            </div>
            <div className="mx-2">
              <input type="checkbox" id="kids" name="kids" value="kids" />
              <label
                className=" ml-1 text-xs align-middle mt-1 pt-1"
                for="kids"
              >
                {" "}
                KIDS
              </label>
            </div>
          </div>
          <button className="rounded-full px-3 w-full align-middle h-12 uppercase mt-3 border bg-black outline-black border-black">
            <p className="text-white text-md tracking-widest">
              JOIN EMAIL LIST
            </p>
          </button>
        </div>
        <div className="col-span-3 ml-36 w-3/4 flex">
          <div className="w-2/6">
            <h1 className="text-4xl ">
              Visit our stores.
            </h1>
            <div className="w-full mt-14">
              <label className="rounded-full px-3 ml-1 h-8 py-2 text-xs align-middle black-border">PUNE</label>
              <label className="rounded-full px-3 ml-1 -mt-1 h-8 py-2 text-xs align-middle black-border">MUMBAI</label>
              <label className="rounded-full px-3 ml-1 -mt-1 h-8 py-2 text-xs align-middle black-border">NASHIK</label>
              <label className="rounded-full px-3 ml-1 -mt-1 h-8 py-2 text-xs align-middle black-border">SAMBHAJI NAGAR</label>
            </div>
          </div>
          <img src={contactUsPoster} className="h-56 my-auto ml-10"/>
        </div>
      </div>
      {/* kids poster */}
      <div className="relative px-8 my-24">
        <img src={kidsPoster} className="" />
        <div className="absolute top-20 right-14 text-white w-1/4 text-right">
          <h1 className="text-5xl font-bold tracking-wider text-black">
            Exclusive kids collection.
          </h1>
          <button className="rounded-full px-3 bg-black align-middle h-10 uppercase mt-4 border-2 border-black ">
            <p className="text-white text-xs tracking-widest">
              Explore the kid's collection
            </p>
          </button>
        </div>
      </div>
      {/* Kids wear exclusive */}
      {/* Exclusive brands Offer*/}
      <div className="w-full my-32 px-8">
        <h1 className="text-4xl pt-4 top-border">EXCLUSIVE KID'S COLLECTION</h1>
        <div className="grid grid-cols-4 gap-4 w-full">
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
          <div className="mt-3">
            <img className="" src={Jacket} />
            <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
            <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
              <p className="text-black text-xs tracking-widest">Explore</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
