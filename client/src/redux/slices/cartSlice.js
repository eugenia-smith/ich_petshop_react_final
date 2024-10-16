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
      const isInCart = state.items.find((index) => index.id === item.id);

      if (isInCart) {
        isInCart.quantity += item.quantity; // Если товар уже в корзине, увеличиваем количество
      } else {
        state.items.push(item); // Иначе добавляем новый товар
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id); // Удаляем товар по id
    },
    clearCart(state) {
      state.items = initialState.items;
    },
  },
});

export const selectItemsCount = (state) => {
  return state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
};

export const selectItemsSum = (state) => {
  return state.cart.items.reduce(
    (acc, item) => acc + item.quantity * item.discont_price,
    0
  );
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
