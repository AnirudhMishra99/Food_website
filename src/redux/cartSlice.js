
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {

    // Add item to cart
    AddItem: (state, action) => {

      const existItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existItem) {

        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );

      } else {

        state.push({
          ...action.payload,
          qty: action.payload.qty || 1,
        });

      }
    },


    // Remove complete item
    RemoveItem: (state, action) => {

      return state.filter(
        (item) => item.id !== action.payload
      );

    },


    // Increase quantity
    IncrememtQty: (state, action) => {

      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      );

    },


    // Decrease quantity
    DecrememtQty: (state, action) => {

      return state
        .map((item) =>
          item.id === action.payload
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0);

    },

  },
});


// Export actions
export const {
  AddItem,
  RemoveItem,
  IncrememtQty,
  DecrememtQty,
} = cartSlice.actions;


// Export reducer
export default cartSlice.reducer;
