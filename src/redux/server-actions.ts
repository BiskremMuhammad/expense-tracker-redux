import { Expense } from "../types/types";

export const simulateSendDataToServer = async (
  newExpense: Expense
): Promise<Expense> => {
  return await new Promise((res, rej) => {
    setTimeout(() => {
      res(newExpense);
    }, 3000);
  });
};
