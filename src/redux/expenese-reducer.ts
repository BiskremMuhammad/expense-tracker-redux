import { Expense, ExpenseStore } from "../types/types";
import { Actions, ActionTypes } from "./actions";

export const expensesReducer = (
  state: ExpenseStore = { expenses: [] },
  action: Actions
): ExpenseStore => {
  switch (action.type) {
    case ActionTypes.ADD_EXPENSE:
      return { expenses: state.expenses.concat(action.payload as Expense) };
    case ActionTypes.DELETE_EXPENSE:
      return {
        expenses: state.expenses.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
