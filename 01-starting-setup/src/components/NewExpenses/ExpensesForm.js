import React, { useState } from 'react'
import './ExpensesForm.css'
const ExpensesForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: "",
  //   enteredDate: ""
  // })


  const titleChaneHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   }
    // })
  }

  const anountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value
    //   }
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value
    //   }
    // })
  }

  const inputChangeHandler = (identified, value) => {
    if (identified === 'title') {
      setEnteredTitle(value)
    } else if (identified === 'date') {
      setEnteredDate(value)
    } else {
      setEnteredAmount(value)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expensesDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onChangeExpenseData(expensesDate)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('')

  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChaneHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={anountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min='2019-01-01' step='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>

    </form>
  )
}

export default ExpensesForm