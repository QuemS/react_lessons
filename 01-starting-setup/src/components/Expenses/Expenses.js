import './Expenses.css'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpenseList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");




  const filterChangeHandler = yearFilter => {
    setFilteredYear(yearFilter);

  }
  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);


  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter selected={filteredYear} addFilter={filterChangeHandler} />
      <ExpenseList items={filteredExpenses} />

    </Card>

  )
}

export default Expenses