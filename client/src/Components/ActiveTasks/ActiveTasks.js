import React, { useEffect, useState } from "react";

const ActiveTasks = (props) => {
  const activeTasks = props.activeTasks;
  return (
    <>
    <div className="button-container"> 
    <button className = "todo-button" onClick={props.getAllTasks}>All Tasks</button>
    <button className = "todo-button" onClick={props.getCompletedTasks}>Completed Tasks</button>
    </div>
    <div>
      <ul>
        {activeTasks
          .map((todo) => {
            return (
              <li>
                <div key={todo.id}>
                  <div>{todo.info}</div>
                  {/* <div>
                    <button onClick={() => props.selectTodo(todo.id)}>
                      Modify
                    </button>
                    <button onClick={() => props.deleteTask(todo.id)}>
                      Delete
                    </button>
                  </div> */}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
    </>
  );
};

export default ActiveTasks;
