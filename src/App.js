import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpemse";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "A Mobile Phone",
    amount: 850,
    date: new Date(2023, 1, 30),
  },
  {
    id: "e6",
    title: "Books",
    amount: 151.9,
    date: new Date(2022, 1, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //add new Expenses in our List
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  //old version
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;

/////////////////////////////Challenge 1
/*
export default function App() {
    const [enteredText, setEnteredText] = React.useState('Invalid message')
    const textChangeHandler = (event) => {
       if (event.target.value.trim().length < 3) {
        setEnteredText('Invalid message');
      // Todo: Update state to say "Invalid"
    } else {
      // Todo: Update state to say "Valid"
      setEnteredText('Valid message');
    }
    }
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange= {textChangeHandler}/>
            <p> {enteredText}</p>
        </form>
    );
}

*/

//Challenge 2
/*
Exercise: Updating State Based On Older State

Your task is to build a basic counter that should increment whenever the "Increment" button is clicked.

Whilst this task allows you to apply your general knowledge about event handling and state (which you already practiced quite a bit at this point in the course), there's also one crucial new aspect: You should update the state following React best practices!

Important: Unfortunately, there's no way of automatically testing whether you used the best practice approach or not. Hence you should take a look at the "Solution explanation" to make sure you solved this task in the best possible way.


import React from 'react';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [counter, setCounter]= React.useState(0);
    const handleClick = () => {
       return setCounter(counter+1);
    }

    // //or     function incrementCounterHandler() {
    //     setCounter(prevCounter => prevCounter + 1);
    // }
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
}
*/
