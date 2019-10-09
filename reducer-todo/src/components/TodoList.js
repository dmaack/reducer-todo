import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, toggleCompleted}) => {
    console.log(todos)

    return (
        <div>
            <h1>Todo List:</h1>
            <div>
            {todos.map(todo => (
            

                <Todo 
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                />
                
            ))}
            </div>
            
        </div>
    )
}

export default TodoList;