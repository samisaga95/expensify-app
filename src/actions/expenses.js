import uuid from "uuid";

//ADD EXPENSE
export const addExpense = ({
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
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: { id: id }
});

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id: id,
  updates: updates
});
