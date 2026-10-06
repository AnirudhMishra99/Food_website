
import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch } from "react-redux";

import {
  RemoveItem,
  IncrememtQty,
  DecrememtQty,
} from "../redux/cartSlice";


function Card2({ name, id, price, image, qty }) {

  const dispatch = useDispatch();


  // Increase quantity
  function increaseQty() {
    dispatch(IncrememtQty(id));
  }


  // Decrease quantity
  function decreaseQty() {
    dispatch(DecrememtQty(id));
  }


  // Remove item
  function deleteItem() {
    dispatch(RemoveItem(id));
  }


  return (

    <div className="w-full min-h-[120px] p-2 shadow-lg flex justify-between rounded-xl bg-white">

      {/* Left Section */}
      <div className="w-[65%] h-full flex gap-4">

        {/* Food Image */}
        <div className="w-[45%] h-[100px] overflow-hidden rounded-lg">

          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />

        </div>


        {/* Food Name + Quantity */}
        <div className="w-[50%] h-full flex flex-col gap-3">

          {/* Food Name */}
          <div className="text-lg text-gray-600 font-semibold truncate">

            {name}

          </div>


          {/* Quantity Box */}
          <div className="w-[110px] h-[45px] bg-slate-200 rounded-lg border-2 border-green-400 text-xl flex overflow-hidden shadow-lg font-semibold">

            {/* Minus */}
            <button
              className="w-[30%] h-full bg-white text-green-400 flex justify-center items-center hover:bg-gray-200"
              onClick={decreaseQty}
            >
              -
            </button>


            {/* Quantity */}
            <span className="w-[40%] h-full text-green-400 bg-slate-200 flex justify-center items-center">

              {qty}

            </span>


            {/* Plus */}
            <button
              className="w-[30%] h-full text-green-400 bg-white flex justify-center items-center hover:bg-gray-200"
              onClick={increaseQty}
            >
              +
            </button>

          </div>

        </div>

      </div>


      {/* Right Section */}
      <div className="flex flex-col justify-start items-end gap-5">

        {/* Price */}
        <span className="text-lg text-green-400 font-semibold">

          Rs {price * qty}/-

        </span>


        {/* Delete */}
        <RiDeleteBin6Line
          className="w-[30px] h-[25px] text-red-400 cursor-pointer hover:text-red-600"
          onClick={deleteItem}
        />

      </div>

    </div>

  );
}


export default Card2;
