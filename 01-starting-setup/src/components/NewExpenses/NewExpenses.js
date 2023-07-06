import React, { useState } from "react"
import './NewExpenses.css'

import ExpensesForm from './ExpensesForm'

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false)
  const chengeExpenseData = (expentedExpenseData) => {
    const expenseData = {
      ...expentedExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }
  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expenese</button>}
      {isEditing && <ExpensesForm onChangeExpenseData={chengeExpenseData} onCancel={stopEditingHandler} />}


    </div>
  )
}

export default NewExpenses