import React from "react";

function AddToCart({ cartCount }) {
  return (
    <div>
      <div className="flex">
        <h1 className="font-black tracking-wider leading-2 text-3xl mb-2 tracking-widest">
          CART
        </h1>
        <p className="tracking-wider pt-3 ml-2 text-xs font-thin">
          {cartCount} ITEMS
        </p>
      </div>
      <div className="w-full mt-2">
        <button
          className="bg-black w-full rounded-full h-10 text-white tracking-wider text-sm font-thin"
        >EXPLORE MEN'S</button>
        <button
          className="bg-black w-full rounded-full h-10 mt-2 text-white tracking-wider text-sm font-thin"
        >EXPLORE WOMEN'S</button>
      </div>
    </div>
  );
}

export default AddToCart;
