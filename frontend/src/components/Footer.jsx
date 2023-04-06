import React from "react";

function Footer() {
  return (
    <div className="footer my-20">
      <h1 className="text-9xl footer-title">AGES</h1>
      <div className="grid grid-cols-5 gap-0 ml-24 px-20 mt-12">
        <div>
          <h1 className="tracking-widest text-md">MEN</h1>
          <div className="mt-6">
            <p className="uppercase text-xs tracking-widest">EXPLORE MEN's</p>
            <p className="uppercase mt-2 text-xs tracking-widest">CLOTHING</p>
            <p className="uppercase mt-2 text-xs tracking-widest">SNOW</p>
            <p className="uppercase mt-2 text-xs tracking-widest">
              ACCESSORIES
            </p>
          </div>
        </div>
        <div>
          <h1 className="tracking-widest text-md">WOMEN's</h1>
          <div className="mt-6">
            <p className="uppercase mt-2 text-xs tracking-widest">
              ACCESSORIES
            </p>
            <p className="uppercase mt-2 text-xs tracking-widest">CLOTHINGS</p>
            <p className="uppercase mt-2 text-xs tracking-widest">
              TRENDING WITH FASHION
            </p>
          </div>
        </div>
        <div>
          <h1 className="tracking-widest text-md">EXPLORE</h1>
          <div className="mt-6">
            <p className="uppercase text-xs tracking-widest">EXPLORE BRAND's</p>
            <p className="uppercase mt-2 text-xs tracking-widest">
              DEAL'S OF THE DAY
            </p>
            <p className="uppercase mt-2 text-xs tracking-widest">
              TRENDING WITH FASHION
            </p>
          </div>
        </div>
        <div>
          <h1 className="tracking-widest text-md">KID'S</h1>
          <div className="mt-6">
            <p className="uppercase text-xs tracking-widest">CLOTHING'S</p>
          </div>
        </div>
        <div>
          <h1 className="tracking-widest text-md">ABOUT US</h1>
          <div className="mt-6">
            <p className="uppercase text-xs tracking-widest">ABOUT US</p>
            <p className="uppercase mt-2 text-xs tracking-widest">FAQ</p>
          </div>
        </div>
      </div>
      <div className="top-border-thin mt-24 mx-10 flex justify-between py-3 MaisonNeueMonoRegular text-xs tracking-wider">
        <p>YOU ONLY LIVE ONCE, BUT IF YOU DO IT RIGHT, ONCE IS ENOUGH.</p>
        <div className="flex">
          <p>© 2023 ALL RIGHTS RESERVED</p>
          <p>PRIVACY</p>
          <p>TERM OF USE</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
