import moment from "moment";

const defaultFilterReducer = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

const filterReducer = (state = defaultFilterReducer, action) => {
  switch (action.type) {
    case "EDIT_TEXT_FILTER":
      return { ...state, text: action.filter.text };
    case "SORTBY":
      return { ...state, sortBy: action.filter.sortBy };
    case "SET_STARTDATE":
      return { ...state, startDate: action.filter.startDate };
    case "SET_ENDDATE":
      return { ...state, endDate: action.filter.endDate };
    default:
      return state;
  }
};

export default filterReducer;
