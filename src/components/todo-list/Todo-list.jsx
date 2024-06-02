// import React from "react";
import AddTodo from "./AddTodo";
import List from "./List";

const Todo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-base-300 pb-5">
      {/* Task */}
      <List />
      {/* Task */}

      <div className="border-b border-gray-400 w-full" />

      {/* Add Todo */}
      <AddTodo />
      {/* Add Todo */}
    </div>
  );
};

export default Todo;
