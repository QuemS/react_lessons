import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 243.32,
    date: new Date(2021, 5, 20),
  },
  {
    id: 'e2',
    title: 'Car Insurance2',
    amount: 571.32,
    date: new Date(2021, 2, 20),
  },
  {
    id: 'e3',
    title: 'Car Insurance3',
    amount: 332.32,
    date: new Date(2021, 3, 20),
  }
  ,
  {
    id: 'e4',
    title: 'Car Insurance4',
    amount: 123.32,
    date: new Date(2021, 4, 20),
  }
]
function App() {

  const [exprensesData, getExpensesData] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {

    getExpensesData((prevState) => {
      return [expense, ...prevState,]
    })
  }




  return (
    <div>

      <NewExpenses onAddExpense={addExpenseHandler} />

      <Expenses items={exprensesData} />
    </div>
  );
}
export default App;
