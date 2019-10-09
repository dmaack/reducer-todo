import React from 'react';


const Todo = props => {

    console.log('Todo', props);
    
        return (
            <div
                style={props.item.completed ? {textDecoration: 'line-through'} : null}
                onClick={() => props.toggleCompleted(props.item.id)}
            >
                <p>{props.item.todo}</p>
            </div>
        )
    
    }


export default Todo;