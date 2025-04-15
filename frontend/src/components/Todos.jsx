import React from "react";

function Todos({ todos }) {
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

  return (
    <div className="bg-blue-400 p-2 m-4">
      {todos.map(function (todo) {
        return (
          <div className="bg-stone-500 p-2 m-4 rounded-lg">
            <h1 className="text-xl font-bold">Title: {todo.title}</h1>
            <h2 className="text-lg py-2 text-white">Description: {todo.description}</h2>
            <button
              className="bg-orange-400 p-1 rounded-xl font-bold"
              onClick={() => {markTodoCompleted(todo)}}
            >
              {todo.completed == true ? "completed" : "mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
