import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../types";

const cartRerducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem !== action.payload);
    case CLEAR_CART:
      return (state = []);
    default:
      return state;
  }
};

export default cartRerducer;
