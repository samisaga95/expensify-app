import { createStore } from "redux";

//Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ setNumber }) => ({
  type: "SET",
  setNumber: setNumber
});

//reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    }
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET": {
      console.log(action.setNumber);
      return {
        count: action.setNumber
      };
    }
    case "RESET": {
      return {
        count: 0
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ setNumber: 100 }));
