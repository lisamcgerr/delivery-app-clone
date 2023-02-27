import { createSlice } from '@reduxjs/toolkit';

// @TODO delete
const initialItem = {id:12, name: 'Dish 12', description: 'short description', price: 11.90, image:'https://links.papareact.com/gn7'};

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const updatedBasket = [...state.items];
      var index = state.items.findIndex(item => item.id === action.payload.id);
      index > -1 ? updatedBasket.splice(index, 1) : console.warn(`Cannot remove product (id: ${action.payload.id}) as it is NOT in the basket`);
      state.items = updatedBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id ===id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) =>
    total += item.price, 0)

export default basketSlice.reducer;