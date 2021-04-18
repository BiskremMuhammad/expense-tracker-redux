import React from "react";
import { useSelector } from "react-redux";
import { GlobalStore } from "../redux/store";
import { Expense, ExpenseStore } from "../types/types";

export const Balance = () => {
  const expenses: Expense[] = useSelector<GlobalStore, Expense[]>(
    (store: GlobalStore) => store.expenses.expenses
  );
  const balance: number = expenses.reduce<number>((a, b) => a + b.amount, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance.toFixed(2)}</h1>
    </>
  );
};
