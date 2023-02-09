import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //filtered the Data
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;

// {/* Condition if nothing exist*/}
// {filteredExpenses.length === 0 ? (
//   <p>No expenses found.</p>
// ) : (
//   filteredExpenses.map((el) => (
//     <ExpenseItem
//       key={el.id}
//       title={el.title}
//       amount={el.amount}
//       date={el.date}
//     />
//   ))
// )}

{
  /* Condition if nothing exist Way 2*/
}
//  {filteredExpenses.length === 0 && <p>No expenses found.</p>}
//  {filteredExpenses.length > 0 &&
//    filteredExpenses.map((el) => (
//      <ExpenseItem
//        key={el.id}
//        title={el.title}
//        amount={el.amount}
//        date={el.date}
//      />
//    ))}
