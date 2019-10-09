import React from 'react';


const Todo = ({id, todo, toggleCompleted}) => {

    
        return (
            <div
                className={todo.completed ? 'completed' : ''}

                // style={todo.completed ? {textDecoration: 'line-through'} : null}
                onClick={() => toggleCompleted(id)}
            >
                <p>{todo.item}</p>
            </div>
        )
    
    }


export default Todo;