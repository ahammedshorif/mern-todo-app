import React from "react";

function Todos({ todos,onTodoUpdate }) {
  async function markTodoCompleted(todo) {
    const response = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo._id,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  async function deleteTodo(todo) {
    const confirmDelete = window.confirm('Are you sure you want to delete this todo?');
    if (!confirmDelete) return;
    
    const response = await fetch("http://localhost:3000/delete", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todo._id,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="bg-blue-400 p-2 m-4 rounded-md">
      {todos.map(function (todo) {
        return (
          <div className="bg-stone-500 p-2 m-4 rounded-lg">
            <h1 className="text-xl font-bold">Title: {todo.title}</h1>
            <h2 className="text-lg py-2 text-white">Description: {todo.description}</h2>
            <button
              className="bg-orange-400 p-1 rounded-xl font-bold"
              onClick={() => {markTodoCompleted(todo); onTodoUpdate()}}
            >
              {todo.completed == true ? "completed" : "mark as completed"}
            </button>

            <button className="bg-red-600 p-1 rounded-xl font-bold ml-2"  onClick={() => {deleteTodo(todo); onTodoUpdate()}}>Delete todo</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
