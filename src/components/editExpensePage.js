import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

const editExpensePage = props => {
  console.log(props);

  return (
    <div>
      <p>We are editing itrm with id: {props.match.params.id}</p>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          console.log(expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={e => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          console.log(e.target);
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(editExpensePage);
