
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";

import { dataContext } from "../Page/UserContext";
import { food_items } from "../food";

function Nav() {
  const {
    input,
    setInput,
    setCate,
    setShowcart,
  } = useContext(dataContext);

  // Redux Cart
  const items = useSelector((state) => state.cart);

  // Search
  useEffect(() => {
    const newlist = food_items.filter((item) =>
      item.food_name
        .toLowerCase()
        .includes(input.toLowerCase())
    );

    setCate(newlist);
  }, [input, setCate]);

  // Total quantity
  const cartCount = items.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-8">

      {/* Logo */}
      <div className="w-[60px] h-[60px] rounded-md bg-white flex justify-center items-center shadow-md">

        <MdFastfood className="w-[30px] h-[30px] text-green-500" />

      </div>


      {/* Search */}
      <form
        className="w-[55%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >

        <IoSearch className="text-[20px] text-green-500 w-[20px] h-[20px]" />

        <input
          type="text"
          placeholder="Search Items..."
          className="w-full outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

      </form>


      {/* Cart */}
      <div
        className="w-[60px] h-[60px] bg-white rounded-md flex justify-center items-center shadow-md relative cursor-pointer"
        onClick={() => setShowcart(true)}
      >

        {/* Cart Count */}
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 min-w-[24px] h-[24px] px-1 bg-green-500 text-white rounded-full flex justify-center items-center font-bold text-sm">
            {cartCount}
          </span>
        )}

        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />

      </div>

    </div>
  );
}

export default Nav;

