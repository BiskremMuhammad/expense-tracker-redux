import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { Actions, ActionTypes } from "../redux/actions";
import { Expense } from "../types/types";

export const AddTransaction = () => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const dispatch = useDispatch<Dispatch<Actions>>();

  const onAddTransaction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // check if there is description
    if (!desc) return;

    // every thing seems alright >> make a new Expense Object to add
    const newExpense: Expense = {
      id: uuid(),
      description: desc,
      amount: parseFloat(amount),
      time: new Date(),
    };

    // dispath a new action to add this transaction
    dispatch({
      type: ActionTypes.SEND_NEW_EXPENSE_DATA,
      payload: newExpense,
    });

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" onClick={onAddTransaction}>
          Add transaction
        </button>
      </form>
    </>
  );
};
