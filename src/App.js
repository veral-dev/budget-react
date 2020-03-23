import React, { useState, useEffect } from 'react';
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'

function App() {

  const [budget, saveBudget] = useState(0)
  const [rest, saveRest] = useState(0)
  const [showQuestion, setQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [createExpense, setCreateExpense] = useState(false)

  //Actualizar el restante con useEffect
  useEffect(() => {
    if (createExpense) {

      //agrega el nuevo presupuesto
      setExpenses([...expenses, expense])
    };

    //Resta del presupuesto actual
    const restBudget = rest - expense.quantity
    saveRest(restBudget)
    setCreateExpense(false)
  }, [createExpense, expense, expenses, rest])


  // const addNewExpense = expense => {
  //   setExpenses([...expenses, expense])
  // }




  return (
    <div className='container'>
      <h1>Gasto semanal</h1>
      <div className="contenido-principal contenido">
        {showQuestion ? (
          <Question saveBudget={saveBudget} saveRest={saveRest} setQuestion={setQuestion} />
        ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setCreateExpense={setCreateExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} rest={rest} />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
