import { createStore, combineReducers } from "redux";
import { ExpenseStore } from "../types/types";
import { expensesReducer } from "./expenese-reducer";

/**
 * interface that defines the glabal store
 *
 * @interface
 * @exports
 */
export interface GlobalStore {
  /**
   * the expenses part of the stare
   *
   * @type {ExpenseStore}
   * @memberof GlobalStore
   */
  expenses: ExpenseStore;
}

const reducers = combineReducers({
  expenses: expensesReducer,
});

export const store = createStore<GlobalStore, any, any, any>(reducers);
