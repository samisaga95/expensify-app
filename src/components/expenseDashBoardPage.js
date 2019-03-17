import React from "react";
import ExpenseList from "./expenseList";
import ExpenseListFilters from "./expenseListFilter";

const expenseDashBoardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default expenseDashBoardPage;
