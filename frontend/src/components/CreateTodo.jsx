import React from "react";

function CreateTodo() {
  return (
    <div className="flex flex-col justify-center w-auto mx-4 bg-blue-400">
      <input
        type="text"
        name=""
        id="title"
        placeholder="title"
        className="m-2 p-2 border-solid "
      />
      <input
        type="text"
        name=""
        id="desc"
        placeholder="description"
        className="m-2 p-2"
      />

      <button
        className="m-2 bg-orange-400 p-2 rounded-xl"
        onClick={async () => {
          const response = await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: document.getElementById("title").value,
              description: document.getElementById("desc").value,
            }),
          });
          const data = await response.json();
          console.log(data);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default CreateTodo;
