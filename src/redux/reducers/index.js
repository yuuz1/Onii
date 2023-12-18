import { combineReducers } from "redux";
import { productReducer } from "./homeReducer";

const reducers = combineReducers({
  productReducer,
});

export default reducers;
