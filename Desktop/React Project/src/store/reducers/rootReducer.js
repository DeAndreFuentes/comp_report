import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductReducer from "./cartProduct";

const rootReducer = combineReducers({
  count: cartCounterReducer,
  cart: cartProductReducer,
});

export default rootReducer;
