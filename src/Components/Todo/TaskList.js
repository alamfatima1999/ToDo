import React, { useState } from "react";

const TaskList = (props) => {
  const todoList = props.todoList;
  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li>
              <div key={todo.id}>
                <div>
                  <input
                    id="todo-1"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => props.changeTodoState(todo)}
                  />
                  {todo.info}
                </div>
                <div>
                  <button onClick={() => props.selectTodo(todo.id)}>
                    Modify
                  </button>
                  <button onClick={() => props.deleteTask(todo.id)}>
                    Delete
                  </button>
                  {/* <button onClick= {() => props.deleteTask(todo.id)}>Done</button> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
