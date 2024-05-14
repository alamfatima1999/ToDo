import React, { useEffect, useState } from "react";

const CompletedTodo = (props) => {
  const todoList = props.todoList;
  return (
    <>
    <button onClick={props.getAllTasks}>All Tasks</button>
    <button onClick={props.getActiveTasks}>Active Tasks</button>
    <div>
      <ul>
        {todoList
          .filter((todo) => todo.completed)
          .map((todo) => {
            return (
              <li>
                <div key={todo.id}>
                  <div>{todo.info}</div>
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
    </>
  );
};

export default CompletedTodo;
