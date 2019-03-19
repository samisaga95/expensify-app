import React from "react";
import { connect } from "react-redux";
import getVisibleExpense from "../selectors/expenses";
import expenses_total from "../selectors/expenses-total";
import numeral from "numeral";

const ExpenseListHeader = props => {
  const expenseWord = props.expenses.length === 1 ? "expense" : "expenses";
  return (
    <div>
      <h1>
        Viewing {props.expenses.length} {expenseWord} totalling{" "}
        {numeral(props.total / 100).format("$0,0.00")}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: getVisibleExpense(state.expenses, state.filter),
    total: expenses_total(getVisibleExpense(state.expenses, state.filter))
  };
};

const ConnectedExpenseListHeader = connect(mapStateToProps)(ExpenseListHeader);

export default ConnectedExpenseListHeader;
