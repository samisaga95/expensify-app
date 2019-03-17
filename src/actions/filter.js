//EDIT_TEXT_FILTER
export const editTextFilter = ({ text = "" }) => ({
  type: "EDIT_TEXT_FILTER",
  filter: { text: text }
});

//EDIT SORTBY
export const sortBy = ({ sortBy }) => ({
  type: "SORTBY",
  filter: { sortBy: sortBy }
});

//EDIT START DATE
export const setStartDate = (startDate = undefined) => ({
  type: "SET_STARTDATE",
  filter: { startDate: startDate }
});

//EDIT START DATE
export const setEndDate = (endDate = undefined) => ({
  type: "SET_ENDDATE",
  filter: { endDate: endDate }
});
