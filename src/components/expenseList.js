import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import getVisibleExpense from "../selectors/expenses";

const ExpenseList = props => {
  return (
    <div>
      <h1>LIST</h1>
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { expenses: getVisibleExpense(state.expenses, state.filter) };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
