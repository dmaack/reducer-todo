import React, { useState } from 'react';




const TodoForm = ({addTodo, clearCompleted}) => {
    const [todo, setTodo] = useState({item: ''});

    const handleChange = e => {
        setTodo({...todo, [e.target.name]: e.target.value})
    };

    // const handleClear = e => {
    //     e.preventDefault();
    //     clearCompleted();
    // };

    const handleSubmit = e => {
        e.preventDefault();
        if(!todo.item.trim()) return;
        addTodo(todo)
        setTodo({item: ''});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type= 'text'
                    name= 'item'
                    onChange={handleChange}
                    value={todo.item}
                />
                <button type='submit'>Add New Task</button>
                <button onClick={clearCompleted}>Clear Completed Task</button>
            </form>
        </div>
    )


}

export default TodoForm;