/**
 * interface that defines the expense object
 *
 * @interface
 * @exports
 */
export interface Expense {
  /**
   * the amount, positive for income, negative for expense
   *
   * @type {number}
   * @memberof Expense
   */
  amount: number;

  /**
   * the id of the expense
   *
   * @type {string}
   * @memberof Expense
   */
  id: string;

  /**
   * the description
   *
   * @type {string}
   * @memberof Expense
   */
  description: string;

  /**
   * the datatime the expense created At
   *
   * @type {Date}
   * @memberof Expense
   */
  time: Date;
}

/**
 * interface that defines the Expense Store
 *
 * @interface
 * @exports
 */
export interface ExpenseStore {
  /**
   * the epenses array
   *
   * @type {Expense[]}
   * @memberof ExpenseStore
   */
  expenses: Expense[];
}
