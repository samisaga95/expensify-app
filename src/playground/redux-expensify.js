import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD EXPENSE
const addExpense = ({
  description = "",
  amount = "0",
  note = "",
  createdAt = "0"
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

//REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: { id: id }
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id: id,
  updates: updates
});

//Expenses reducer
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      console.log(action.expense);
      return state.filter(({ id }) => id !== action.expense.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const defaultFilterReducer = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

//EDIT_TEXT_FILTER
const editTextFilter = ({ text = "" }) => ({
  type: "EDIT_TEXT_FILTER",
  filter: { text: text }
});

//EDIT SORTBY AMOUNT
const sortByAmount = ({ sortBy }) => ({
  type: "SORTBY_AMOUNT",
  filter: { sortBy: sortBy }
});

//EDIT SORTBY DATE
const sortByDate = ({ sortBy }) => ({
  type: "SORTBY_DATE",
  filter: { sortBy: sortBy }
});

//EDIT START DATE
const setStartDate = (startDate = undefined) => ({
  type: "SET_STARTDATE",
  filter: { startDate: startDate }
});

const setEndDate = (endDate = undefined) => ({
  type: "SET_ENDDATE",
  filter: { endDate: endDate }
});

//FIlters reducer
const filterReducer = (state = defaultFilterReducer, action) => {
  switch (action.type) {
    case "EDIT_TEXT_FILTER":
      return { ...state, text: action.filter.text };
    case "SORTBY_AMOUNT":
      return { ...state, sortBy: action.filter.sortBy };
    case "SORTBY_DATE":
      return { ...state, sortBy: action.filter.sortBy };
    case "SET_STARTDATE":
      return { ...state, startDate: action.filter.startDate };
    case "SET_ENDDATE":
      return { ...state, endDate: action.filter.endDate };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof startDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createdAt: 1100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: 1200 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }));
// store.dispatch(editTextFilter({ text: "Rent" }));
store.dispatch(sortByAmount({ sortBy: "amount" }));
// store.dispatch(sortByDate({ sortBy: "date" }));

store.dispatch(setStartDate(1000));
store.dispatch(setEndDate(1400));

const demoState = {
  expenses: [
    {
      id: "123",
      description: "January rent",
      note: "this was the payement for the month of Jan.",
      amount: 54500,
      createdAt: 0
    }
  ],
  filter: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
