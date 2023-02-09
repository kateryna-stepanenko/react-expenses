import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  //1. Way
  const [enteredTitle, setEnteredTitle] = useState('');
  //a number as a String
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //2. Second Way
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const dateChangeHandler = (event) => {
  //     setEnteredDate(event.target.value);
  //   };

  //Warning, if the fill keep empty
  const [textWarning, setTextWarning] = useState('');
  //a number as a String
  const [amountWarning, setAmountWarning] = useState('');
  const [dateWarning, setDateWarning] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
    //2.Second Way
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //3. Way
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);

    //2. Way
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    //3. Way
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    setTextWarning('');
    setAmountWarning('');
    setDateWarning('');
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    //2.Way
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = event => {
    //the page will not reload
    event.preventDefault();

    //Two-way binding to clear Inputs
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    let validData = true;
    //Check if all fields are filled in
    if (enteredTitle.trim().length < 1) {
      validData = false;
      setTextWarning("Please fill the field 'Title'");
    }
    if (enteredAmount.trim().length < 1) {
      validData = false;
      setAmountWarning("Please fill the field 'Amount'");
    }
    if (enteredDate.toString().length < 1) {
      validData = false;
      setDateWarning("Please fill the field 'Date'");
    }
    if (validData === true) {
      //executed here
      props.onSaveExpenseData(expenseData);
      //console.log(expenseData);

      //back to empty string, cleared Input

      clearForm();
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <div className="new-expense__warning">{textWarning}</div>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <div className="new-expense__warning">{amountWarning}</div>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          <div className="new-expense__warning">{dateWarning}</div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
