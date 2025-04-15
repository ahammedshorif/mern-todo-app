import { useState, useEffect } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);

  async function fetchTodos() {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data.todos);
  } 

  // Fetch once on mount

  useEffect(() => {
     fetchTodos(); // Call the async function inside useEffect
  }, []);

  // Fetch after creating or updating a todo
  const handleTodoChange = () => {
    fetchTodos();
    
  };


  return (
    <div >
      <div className='sticky top-0'>
        <CreateTodo onTodoCteate={handleTodoChange}> </CreateTodo>
      </div>
       
       <Todos todos={todos} onTodoUpdate={handleTodoChange}> </Todos>
     </div>
  )
}

export default App
