import React, { useEffect, useState } from "react";

const CreateTodo = (props) => {
    const [todo, setTodo] = useState({});
    
    useEffect(()=> {
        if(props.editTodo){
            setTodo(props.selectedTodo);
        }
    }, [props.editTodo]);

    const handleTodo = (e) => {
        setTodo({info: e.target.value, completed: false });
    }

    const addTodo = (todo) => {
        props.insertTodo(todo);
        setTodo({info:"",completed:false});
    }
    
    const editTodo = (todo) => {
        props.editTask(todo);
        setTodo({info:"",completed:false});
    }

    return(
        <div>
            {!props.editTodo?<label>Create Todo</label>
            :<label>Update Todo</label>}
            <input type="text" value={todo.info} onChange={(e) => handleTodo(e)}></input>
            {!props.editTodo?
            <button onClick={() => addTodo(todo)}>Add Todo</button>:
            <button onClick={() => editTodo(todo)}>Update Todo</button>}
        </div>
    );
}

export default CreateTodo;