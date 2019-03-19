import React from "react";
import ExpenseList from "./expenseList";
import ExpenseListFilters from "./expenseListFilter";
import ExpenseListSummary from "./expenseListSummary";

const expenseDashBoardPage = () => (
  <div>
    <ExpenseListSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default expenseDashBoardPage;
