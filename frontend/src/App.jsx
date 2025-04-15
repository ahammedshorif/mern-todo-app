import { useState, useEffect } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos,setTodos] = useState([]);

  /* ***This worng way because its render infiniy time*** */

  // async function fetchTodos(){
  //    let result= await fetch("http://localhost:3000/todos")
  //    let todo = await result.json()
  //    console.log(todo);
     
  //    setTodos(todo.todos)
  // }
  // fetchTodos()


  /* ***This right way*** */

  useEffect(() => {
    async function fetchTodos() {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        setTodos(data.todos);
      } 
    fetchTodos(); // Call the async function inside useEffect
  }, []);


  return (
    <div >
      <div className='sticky top-0'>
        <CreateTodo> </CreateTodo>
      </div>
       
       <Todos todos={todos}> </Todos>
     </div>
  )
}

export default App
