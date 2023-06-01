import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart, getSubTotal } from "../../scripts/cart";
import CartItem from "./CartItem";
import { setSubTotal } from "../../actions";

function AddToCart() {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = useSelector((state) => state.cartCount);
  const subTotal = useSelector((state) => state.subTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadSubTotal = async () => {
    await getSubTotal().then((res) => {
      dispatch(setSubTotal(res.data.subTotal))
    })
  }

  const loadCartItems = async () => {
    await getCart().then((res) => {
      setCartItems(res.data.data);
      loadSubTotal();
    });
  };

  return (
    <div>
      <div className="flex">
        <h1 className="font-black tracking-wider leading-2 text-3xl mb-2 tracking-widest">
          CART
        </h1>
        <p className="tracking-wider pt-3 ml-2 text-xs font-thin MaisonNeueMonoRegular">
          {cartCount} ITEMS
        </p>
      </div>
      {cartCount >= 1 ? (
        <div>
          <div className="overflow-scroll h-2/5 no-scrollBar cart-item-container">
            {cartItems.map((product) => {
              return <CartItem product={product.product} proQuantity={product.quantity} loadCartItems={loadCartItems}/>;
            })}
          </div>
          <hr className="border-black border-2 my-2"/>
          <div className="flex w-full justify-between">
            <p className="text-sm">SUBTOTAL</p><p className="text-sm">${subTotal}</p>
          </div>
          <button className="bg-black uppercase mt-1 w-full rounded-full h-12 py-2 mt-2 text-white text-sm font-thin tracking-widest">
              proceed Checkout
            </button>
        </div>
      ) : (
        <div className="w-full mt-2">
          <button className="bg-black w-full rounded-full h-10 text-white tracking-wider text-sm font-thin">
            EXPLORE MEN'S
          </button>
          <button className="bg-black w-full rounded-full h-10 mt-2 text-white tracking-wider text-sm font-thin">
            EXPLORE WOMEN'S
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
