import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartTotal: 0,
    pizzaTotal: 0,
    ingredientsTotal: 0,
    items1: [],
    items2: [],
    quantity: new Map(),
  },
  reducers: {
    addItem1: (state, action) => {
      let item = state.items1.find((item) => action.payload.id == item.id);
      if (item == undefined) {
        state.items1.push(action.payload);
        state.cartTotal += action.payload.price;
        // state.quantity.push({ id: action.payload.id, quantity: 0 });
        state.quantity.set(action.payload.id, 1);
      } else {
        state.cartTotal += action.payload.price;
        state.quantity.set(
          action.payload.id,
          state.quantity.get(action.payload.id) + 1
        );
      }
    },
    addItem2: (state, action) => {
      let item = state.items2.find((item) => action.payload.id == item.id);
      if (item == undefined) {
        state.items2.push(action.payload);
        state.ingredientsTotal += action.payload.price;
        state.cartTotal += action.payload.price;
      }
    },
    removeItem1: (state, action) => {
      let item = state.items1.find((item) => action.payload.id == item.id);
      if (item !== undefined) {
        // let deletedItem=state.quantity.find((curItem)=>curItem.id== action.payload.id);
        state.items1 = state.items1.filter(
          (curItem) => curItem.id !== action.payload.id
        );
        state.cartTotal -= action.payload.price;
        state.quantity.set(
          action.payload.id,
          state.quantity.get(action.payload.id) - 1
        );
        // for (let i = 0; i < state.quantity.length; i++) {
        //   if (state.quantity[i].id == action.payload.id) {
        //     state.quantity[i].quantity -= 1;
        //   }
        // }
      }
    },
    reducePrice: (state, action) => {
      state.cartTotal -= action.payload.price;
      state.quantity.set(
        action.payload.id,
        state.quantity.get(action.payload.id) - 1
      );
    },
    clearCart: (state, action) => {
      return { items1: [], items2: [], cartTotal: 0, quantity: new Map() };
    },
  },
});

export default cartSlice.reducer;

export const { addItem1, addItem2, removeItem1, reducePrice, clearCart } =
  cartSlice.actions;

// action : {
// payload : info about the product details
// }
