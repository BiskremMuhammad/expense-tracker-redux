import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { ExpenseStore } from "../types/types";
import { expensesReducer } from "./expenese-reducer";
import { sagaWatcher } from "./sagas";

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

const sagaWorker = createSagaMiddleWare();

const reducers = combineReducers({
  expenses: expensesReducer,
});

export const store = createStore<GlobalStore, any, any, any>(
  reducers,
  applyMiddleware(sagaWorker)
);

sagaWorker.run(sagaWatcher);
