import React from "react"
import './NewExpenses.css'

import ExpensesForm from './ExpensesForm'

const NewExpenses = (props) => {
  const chengeExpenseData = (expentedExpenseData) => {
    const expenseData = {
      ...expentedExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpensesForm onChangeExpenseData={chengeExpenseData} />

    </div>
  )
}

export default NewExpenses