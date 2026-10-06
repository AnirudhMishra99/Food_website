import { createContext, useState } from "react";
import { food_items } from "../food";

export const dataContext = createContext();

function UserContext({ children }) {
  const [cate, setCate] = useState(food_items);
  const [input, setInput] = useState("");
  const [showcart, setShowcart] = useState(false);

  const data = {
    input,
    setInput,
    cate,
    setCate,
    showcart,
    setShowcart,
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;