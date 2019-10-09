import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, reducer } from './reducers/reducer';

//Styles
// import { createGlobalStyle } from "styled-components";
// import styled from 'styled-components';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
          console.log(state); //item, completed, id object

          const addTodo = todo => {
            console.log(todo)
            dispatch({type: 'ADD_ITEM', payload: todo})
          } 
          
          const toggleCompleted = id => {
            console.log(id)
            dispatch({type: 'TOGGLE_ITEM', payload: id})
          }
          
          const clearCompleted = id => {
            dispatch({type: 'CLEAR_COMPLETED', payload: id})
          }

          
          // const handleChange = e => {
          //   dispatch({type: 'CHANGE_ITEM', payload: e.target.value});
          // }

    return (
      <div>
        <h1>Dominique's Todo List</h1>
      <div>
      <TodoForm 
        addTodo={addTodo}
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
