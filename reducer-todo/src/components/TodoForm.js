import React, { useState, useReducer } from 'react';




const TodoForm = ({state, dispatch}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setNewTodo(e.target.value);
    };

    // const handleClear = e => {
    //     e.preventDefault();
    //     dispatch({type: 'CLEAR_COMPLETED'})
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        setNewTodo('');
        dispatch({type: 'ADD_TODO', payload: newTodo})
    }

    return (
        <div>
            <form handleSubmit={handleSubmit}>
                <input 
                    type= 'text'
                    name= 'todo'
                    onChange={handleChange}
                    value={state.newTodo}
                />
                <button type='submit'>Add New Task</button>
                {/* <button onClick={handleClear}>Clear Completed Task</button> */}
            </form>
        </div>
    )


}

export default TodoForm;