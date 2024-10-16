import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Массив товаров, добавленных в корзину
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity; // Если товар уже в корзине, увеличиваем количество
      } else {
        state.items.push(item); // Иначе добавляем новый товар
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id); // Удаляем товар по id
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
