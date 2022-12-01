import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = function (props) {
  const [formVisibible, setFormVisible] = useState(false);
  const onSaveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setFormVisible(false);
  };

  const startEditingHandler = () => {
    setFormVisible(true);
  };

  const stopEditingHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-expense">
      {/* formVisibible === false show the button */}
      {!formVisibible && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* formVisibible === true show the button */}
      {formVisibible && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
