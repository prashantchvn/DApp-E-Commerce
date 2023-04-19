import React from "react";
import Jacket from "../../assets/Images/jacket.webp";

function SingleProduct() {
  return (
    <div className="mt-3">
      <img className="" src={Jacket} />
      <h1 className="mt-4 text-2xl">Hooded Tech-Fleece Full-Zip</h1>
      <button className="rounded-full px-4 align-middle h-10 uppercase mt-2 border outline-black border-black">
        <p className="text-black text-xs tracking-widest">Explore</p>
      </button>
    </div>
  );
}

export default SingleProduct;
