import React, {useState} from "react";

const TaskList = (props) => {

    const todoList = props.todoList;
    return(
        <div>
            {todoList.map((todo)=> {
                return(
                <div key ={todo.id}>
                    {todo.info}
                    <button onClick = {()=> props.selectTodo(todo.id)}>Modify</button>
                    <button onClick= {() => props.deleteTask(todo.id)}>Delete</button>
                </div>
                );
            })}
        </div>
    );
} 

export default TaskList;