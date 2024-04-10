import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartTotal: 0,
    pizzaTotal: 0,
    ingredientsTotal: 0,
    pizzas: [],
    ingredients: [],
    quantity: new Map(),
  },
  reducers: {
    addItemPizza: (state, action) => {
      let item = state.pizzas.find((item) => action.payload.id === item.id);
      if (item === undefined) {
        state.pizzas.push(action.payload);
        state.cartTotal += action.payload.price;
        state.pizzaTotal += action.payload.price;
        state.quantity.set(action.payload.id, 1);
      } else {
        state.cartTotal += action.payload.price;
        state.pizzaTotal += action.payload.price;
        state.quantity.set(
          action.payload.id,
          state.quantity.get(action.payload.id) + 1
        );
      }
    },
    addItemIngredients: (state, action) => {
      let item = state.ingredients.find(
        (item) => action.payload.id === item.id
      );
      if (item === undefined) {
        state.ingredients.push(action.payload);
        state.ingredientsTotal += action.payload.price;
        state.cartTotal += action.payload.price;
      }
    },
    removeItemPizza: (state, action) => {
      let item = state.pizzas.find((item) => action.payload.id === item.id);
      if (item !== undefined) {
        state.pizzas = state.pizzas.filter(
          (curItem) => curItem.id !== action.payload.id
        );
        state.cartTotal -= action.payload.price;
        state.pizzaTotal -= action.payload.price;
        state.quantity.set(
          action.payload.id,
          state.quantity.get(action.payload.id) - 1
        );
      }
    },
    removeItemIngredients: (state, action) => {
      let item = state.ingredients.find(
        (item) => action.payload.id === item.id
      );
      if (item !== undefined) {
        state.ingredients = state.ingredients.filter(
          (curItem) => curItem.id !== action.payload.id
        );
        state.cartTotal -= action.payload.price;
        state.ingredientsTotal -= action.payload.price;
      }
    },
    reducePricePizza: (state, action) => {
      state.cartTotal -= action.payload.price;
      state.pizzaTotal -= action.payload.price;
      state.quantity.set(
        action.payload.id,
        state.quantity.get(action.payload.id) - 1
      );
    },
    reducePriceIngredients: (state, action) => {
      state.cartTotal -= action.payload.price;
      state.ingredientsTotal -= action.payload.price;
    },
    clearCart: (state, action) => {
      return {
        pizzas: [],
        ingredients: [],
        cartTotal: 0,
        pizzaTotal: 0,
        ingredientsTotal: 0,
        quantity: new Map(),
      };
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemPizza,
  addItemIngredients,
  removeItemPizza,
  removeItemIngredients,
  reducePricePizza,
  reducePriceIngredients,
  clearCart,
} = cartSlice.actions;
