import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("items")) || [],
    totalItems: Number(localStorage.getItem("totalItems")) || 0,
  },

  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      localStorage.setItem("totalItems", state.totalItems);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeItem(state, action) {
      const filteredItems = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );
      state.items = filteredItems;
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      localStorage.setItem("totalItems", state.totalItems);
    },

    incrementQuantity(state, action) {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        state.totalItems += 1;
      }
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      localStorage.setItem("totalItems", state.totalItems);
    },
    decrementQuantity(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity -= action.payload.quantity;
        if (existingItem.quantity <= 0) {
          state.items.splice(existingItemIndex, 1);
        }
      }

      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      localStorage.setItem("totalItems", state.totalItems);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      localStorage.removeItem("items");
      localStorage.removeItem("totalItems");
    },
  },
});
export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
