import React, { useState } from "react";
import SingleProduct from "./SingleProduct";

function ProductRow({ heading }) {
  const [product, setProduct] = useState([0, 1, 2, 3]);

  return (
    <div className="w-full my-32 px-8">
      <h1 className="text-4xl pt-4 top-border uppercase">{heading}</h1>
      <div className="grid grid-cols-4 gap-4 w-full">
        {product.map((product) => {
          return (
            <SingleProduct
              key={product._id}
              product={product}
              carouselEnabled={true}
              buttonEnabled={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductRow;
