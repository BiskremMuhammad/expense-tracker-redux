import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions, ActionTypes } from "../redux/actions";
import { GlobalStore, store } from "../redux/store";
import { Expense } from "../types/types";

export const Transactions = () => {
  const expenses: Expense[] = useSelector<GlobalStore, Expense[]>(
    (store: GlobalStore) => store.expenses.expenses
  );
  const dispatch = useDispatch<Dispatch<Actions>>();

  const deleteExpense = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    expenseId: string
  ) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.DELETE_EXPENSE,
      payload: expenseId,
    });
  };
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {expenses.map((exp: Expense, i: number) => (
          <li className={exp.amount > 0 ? "plus" : "minus"}>
            {exp.description}{" "}
            <span>
              {exp.amount < 0 ? "-" : ""}${Math.abs(exp.amount).toFixed(2)}
            </span>
            <button
              className="delete-btn"
              onClick={(e) => deleteExpense(e, exp.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
