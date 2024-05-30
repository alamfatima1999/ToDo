import React, { useState } from "react";

const TaskList = (props) => {
  const todoList = props.todoList;
  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return (
            <div className="todo-list-container" key={todo.id}>
              <div>
                <input className= "todo-checkbox"
                  id="todo-1"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => props.editTask(todo)}
                />
                {todo.info}
              </div>
              <div>
                <button
                  className="btn-modify"
                  onClick={() => props.selectTodo(todo._id)}
                >
                  Modify
                </button>
                <button
                  className="btn-delete"
                  onClick={() => props.deleteTask(todo._id)}
                >
                  Delete
                </button>
                {/* <button onClick= {() => props.deleteTask(todo.id)}>Done</button> */}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
