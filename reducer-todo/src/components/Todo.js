import React from 'react';


const Todo = ({id, todo, toggleCompleted, completed}) => {

    
        return (
            <div
                className={todo.completed ? 'completed' : ''}

                style={completed ? {textDecoration: 'line-through'} : null}
                onClick={() => toggleCompleted(id)}
            >
                <p>{todo.item}</p>
                {/* <p>{{name: 'Dominique'}}</p> */}
            </div>
        )
    
    }


export default Todo;