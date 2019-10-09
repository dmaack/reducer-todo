import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    console.log('Todolist', props)

    return (
        <div>
            <h1>Todo List:</h1>
            <div>
            {props.todoItem.map(item => (
                <Todo 
                    key={item.id}
                    item={item}
                    toggleComplete={props.dispatch}
                />
            ))}
            </div>
        </div>
    )
}

export default TodoList;