import {
  takeLatest,
  call,
  put,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { Expense } from "../types/types";
import { Actions, ActionTypes } from "./actions";
import { simulateSendDataToServer } from "./server-actions";

function* sendNewExpenseData(
  action: Actions
): Generator<CallEffect<Expense> | PutEffect<Actions>, void, Expense> {
  try {
    const data: Expense = yield call(
      simulateSendDataToServer,
      action.payload as Expense
    );
    yield put({ type: ActionTypes.ADD_EXPENSE, payload: data });
  } catch (err) {
    yield put({ type: ActionTypes.SAVE_NEW_EXPENSE_FAILED });
  }
}

export function* sagaWatcher() {
  yield takeLatest(ActionTypes.SEND_NEW_EXPENSE_DATA, sendNewExpenseData);
}
