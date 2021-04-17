import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello React Redux</h1>
      </div>
    </Provider>
  );
}

export default App;
