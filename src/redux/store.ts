import { createStore, combineReducers } from "redux";
import { expensesReducer } from "./expenese-reducer";

const reducers = combineReducers({
  expenses: expensesReducer,
});

export const store = createStore(reducers);
