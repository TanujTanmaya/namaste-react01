import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlicee";
//import { clearCart } from '../utils/cartSlice';
//import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // const handleRemoveitem = (item) => {
  //   dispatch(removeItem(item));
  // };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart Page</h1>

      <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>
        Clear Cart
      </button>

      {cartItems.length === 0 && <h1>Cart is empty</h1>}

      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
