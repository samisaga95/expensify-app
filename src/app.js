import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/ConfigureStore";
import "normalize.css/normalize.css";
import "./Styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import { editTextFilter } from "./actions/filter";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";

const store = configureStore();

// store.dispatch(addExpense({ description: "Water bill", amount: 10000 }));
// store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
// store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

// console.log (store.getState());

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
