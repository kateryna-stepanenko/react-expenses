import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = function (props) {
  const dateChangeHandler = function (event) {
    props.onChangeFilter(event.target.value);
  };

  // const comparableYear = new Date(event.target.value).getFullYear();
  // const filterDate = expenses.filter(exp => {
  //   const date = new Date(exp.date).getFullYear();
  //   return date === comparableYear;
  // });
  // console.log(...filterDate);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
