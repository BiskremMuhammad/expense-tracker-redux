import React from "react";
import { Provider } from "react-redux";
import { AddTransaction } from "./components/add-transaction";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/income-expenses";
import { Transactions } from "./components/transactions";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
