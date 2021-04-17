import { Expense } from "../types/types";

/**
 * enum that defines all action types
 *
 * @enum
 * @exports
 */
export enum ActionTypes {
  ADD_EXPENSE = "ADD_EXPENSE",
  DELETE_EXPENSE = "DELETE_EXPENSE",
}

/**
 * interface that definse the Action structure
 *
 * @interface
 * @exports
 */
export interface Actions {
  /**
   * the type of the action
   *
   * @type {ActionTypes}
   * @memberof Actions
   */
  type: ActionTypes;

  /**
   * the payload of action
   *  - of type Expense when to add a new Expense
   *  - of type string when delete >> represents the id of the expense
   *
   * @type {Expense | string}
   * @memberof Actions
   */
  payload?: Expense | string;
}
