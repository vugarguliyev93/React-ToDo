import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState('');
  const createTodos = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const deleteListById = (deleteId) => {
    setTodos([...todos.filter((list) => list.id !== deleteId)])
  }
  // console.log(todos)

  const deleteItem = () => {
    const variables = add.filter((item) => item !== deleted)
  }
  return (

    <div className='app-style' style={{ width: '500px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
      <TodoCreate onCreateTodo={createTodos} />
      <TodoList lists={todos} deleteListById={deleteListById} />
    </div >


  )
}

export default App
