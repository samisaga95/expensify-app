import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortBy,
  setStartDate,
  setEndDate
} from "../actions/filter";

class expenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filter.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filter.sortBy}
          onChange={e => {
            this.props.dispatch(sortBy({ sortBy: e.target.value }));
          }}
        >
          <option value="date"> Date</option>
          <option value="amount"> Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filter.startDate}
          endDate={this.props.filter.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(expenseListFilters);
