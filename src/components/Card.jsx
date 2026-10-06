import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {

  const dispatch = useDispatch();

  const handleAddToDish = () => {

    dispatch(
      AddItem({
        id: id,
        name: name,
        price: price,
        image: image,
        qty: 1,
      })
    );

    // Toast message
    toast.success("Item added to cart!");
  };

  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300">

      {/* Food Image */}
      <div className="w-full h-[60%] overflow-hidden rounded-lg">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />

      </div>


      {/* Food Name */}
      <div className="text-2xl font-semibold">
        {name}
      </div>


      {/* Price + Type */}
      <div className="w-full flex justify-between items-center">

        {/* Price */}
        <div className="text-green-500 font-bold text-lg">
          Rs {price}/-
        </div>


        {/* Food Type */}
        <div className="flex justify-center items-center text-green-500 gap-2 text-lg font-semibold">

          {type === "veg" ? (
            <LuLeafyGreen />
          ) : (
            <GiChickenOven />
          )}

          <span>{type}</span>

        </div>

      </div>


      {/* Add To Cart */}
      <button
        className="p-3 bg-green-300 w-full rounded-lg text-white hover:bg-green-400 transition-all"
        onClick={handleAddToDish}
      >
        Add to dish
      </button>

    </div>
  );
}

export default Card;