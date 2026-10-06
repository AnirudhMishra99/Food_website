import { useContext } from "react";

import Categories from "./Categories";
import { food_items } from "../food";

import Nav from "../components/Nav";
import Card from "../components/Card";
import Card2 from "../components/Card2";

import { dataContext } from "./UserContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

function Home() {
  const {
    cate,
    setCate,
    input,
    showcart,
    setShowcart,
  } = useContext(dataContext);

  // =========================
  // CATEGORY FILTER
  // =========================
  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) =>
          item.food_category.toLowerCase() ===
          category.toLowerCase()
      );

      setCate(newList);
    }
  }

  // =========================
  // REDUX CART
  // =========================
  const items = useSelector((state) => state.cart);

  // =========================
  // SUBTOTAL
  // =========================
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // =========================
  // DELIVERY FEE
  // =========================
  const deliveryFee = items.length > 0 ? 20 : 0;

  // =========================
  // TAX
  // 0.5%
  // =========================
  const Taxes = (subtotal * 0.5) / 100;

  // =========================
  // FINAL TOTAL
  // =========================
  const total = Math.floor(
    subtotal + deliveryFee + Taxes
  );

  return (
    <div className="bg-slate-200 w-full min-h-screen">

      {/* =========================
          NAVBAR
      ========================= */}
      <Nav />


      {/* =========================
          CATEGORIES
      ========================= */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full px-5">

          {Categories.map((item) => (
            <div
              key={item.id}
              onClick={() => filter(item.name)}
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-100 cursor-pointer transition-all duration-200"
            >
              {item.icon}

              <h3>{item.name}</h3>
            </div>
          ))}

        </div>
      )}


      {/* =========================
          FOOD ITEMS
      ========================= */}
      <div className="flex flex-wrap justify-center gap-5 mt-8 pt-8 pb-8 px-5">

        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}

      </div>


      {/* =========================
          CART SIDEBAR
      ========================= */}
      <div
        className={`w-full md:w-[30vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col ${
          showcart
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* =========================
            CART HEADER
        ========================= */}
        <header className="w-full flex justify-between items-center shrink-0">

          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>

          <RxCross2
            className="w-[30px] h-[30px] text-green-400 cursor-pointer hover:text-gray-600"
            onClick={() => setShowcart(false)}
          />

        </header>


        {/* =========================
            CART CONDITION
        ========================= */}

        {items.length > 0 ? (

          <>
            {/* =========================
                CART ITEMS
            ========================= */}
            <div className="w-full mt-9 flex-1 overflow-y-auto flex flex-col gap-8 items-center">

              {items.map((item) => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}

            </div>


            {/* =========================
                PRICE DETAILS
            ========================= */}
            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-3 p-6 shrink-0">

              {/* SUBTOTAL */}
              <div className="w-full flex justify-between items-center">

                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>

                <span className="text-lg text-green-400 font-semibold">
                  Rs {subtotal}/-
                </span>

              </div>


              {/* DELIVERY FEE */}
              <div className="w-full flex justify-between items-center">

                <span className="text-lg text-gray-600 font-semibold">
                  Delivery Fee
                </span>

                <span className="text-lg text-green-400 font-semibold">
                  Rs {deliveryFee}/-
                </span>

              </div>


              {/* TAXES */}
              <div className="w-full flex justify-between items-center">

                <span className="text-lg text-gray-600 font-semibold">
                  Taxes
                </span>

                <span className="text-lg text-green-400 font-semibold">
                  Rs {Taxes.toFixed(2)}/-
                </span>

              </div>

            </div>


            {/* =========================
                TOTAL + PLACE ORDER
            ========================= */}
            <div className="w-full flex flex-col items-center shrink-0">

              {/* TOTAL */}
              <div className="w-full flex justify-between items-center p-7">

                <span className="text-2xl text-gray-600 font-semibold">
                  Total
                </span>

                <span className="text-2xl text-green-400 font-semibold">
                  Rs {total}/-
                </span>

              </div>


              {/* PLACE ORDER */}
              <button
                className="p-3 bg-green-300 w-[80%] rounded-lg text-white font-semibold hover:bg-green-400 transition-all"
              >
                Place Order
              </button>

            </div>

          </>

        ) : (

          /* =========================
              EMPTY CART
          ========================= */
          <div className="flex-1 flex flex-col justify-center items-center text-center">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <p className="text-2xl text-gray-500 font-semibold">
              Your cart is empty
            </p>

            <p className="text-gray-400 mt-2">
              Add some delicious food to your cart
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Home;