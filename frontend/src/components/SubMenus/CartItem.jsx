import React, {useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Close from "../../assets/Icons/close.svg";
import Carousel from "../SubComponents/Carousel";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex my-4">
      <div className="w-4/12">
        <Carousel />
      </div>
      <div className="px-2 relative py-2 w-full">
        <img src={Close} className="h-4 w-4 absolute right-2 top-0 z-50 cursor-pointer" />
        <p className="text-md uppercase tracking-wider font-thin pr-2">
          {product.productName}
        </p>
        <div className="flex mt-auto absolute bottom-px w-full justify-between">
          <Select
            labelId="demo-simple-select-label"
            className="rounded-full h-8 w-18 border-2 MaisonNeueMonoRegular border-black"
            value={quantity}
            onChange={(e) => {
              e.preventDefault();
              setQuantity(e.target.value);
            }}
          >
            <MenuItem className="MaisonNeueMonoRegular" value={1}>
              1
            </MenuItem>
            <MenuItem className="MaisonNeueMonoRegular" value={2}>
              2
            </MenuItem>
          </Select>
          <p className="MaisonNeueMonoRegular font-thin text-sm mr-4 mt-2">
            $ {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
