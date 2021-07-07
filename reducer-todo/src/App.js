import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, reducer } from './reducers/reducer';

//Styles
// import { createGlobalStyle } from "styled-components";
// import styled from 'styled-components';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
          console.log(state); //item, completed, id  - object

          const addTodo = todo => {
            console.log('this is the new todo im adding',todo)
            dispatch({type: 'ADD_TODO', payload: todo.item})
          } 
          
          const toggleCompleted = id => {
            console.log('this is the id of the todo I mark as complete', id)
            dispatch({type: 'TOGGLE_COMPLETED', payload: id})
          }
          
          const clearCompleted = id => {
            dispatch({type: 'CLEAR_COMPLETED', payload: id})
          }

          
          const handleChange = e => {
            dispatch({type: 'CHANGE_ITEM', payload: e.target.value});
          }

    return (
      <div>
        <h1>Dominique's Todo List</h1>
      <div>
      <TodoForm 
        addTodo={addTodo}
        handleChange={handleChange}
        clearCompleted={clearCompleted}
      />
      <TodoList 
        todos={state.todos}
        toggleCompleted={toggleCompleted}
      />
      </div>
      </div>
    );
  
 } //closes App

export default App;
