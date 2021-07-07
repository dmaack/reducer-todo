import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, toggleCompleted}) => {
    console.log('these are the todos in my todoList', todos)

    return (
        <div>
            <h1>Todo List:</h1>
            <div>
            {todos.map(todo => (
            

                <Todo 
                    id={todo.id}
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                    completed={todo.completed}
                />
                
            ))}
            </div>
            
        </div>
    )
}

export default TodoList;