import React, { useState, useReducer } from 'react';

//Components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//Reducer
import { initialState, reducer } from './reducers/reducer';

//Styles
// import { createGlobalStyle } from "styled-components";
// import styled from 'styled-components';

const App = () => {
  // const [todo, setTodo] = useState();

  //reducer
  const [state, dispatch] = useReducer(reducer, initialState);
          console.log(state); //item, completed, id object

    return (
      <div>
        <h1>Dominique's Todo List</h1>
      <div>
      <TodoForm 
       state={state.todos}
       dispatch={dispatch}
      />
      <TodoList 
        addTodo={state.todos}
        dispatch={dispatch}
      />
      </div>
      </div>
    );
  
 } //closes App

export default App;


// const addTodo = todo => {
//   // console.log(todo)
//   todo !== '' && dispatch({type: 'ADD_ITEM', payload: todo})
// } 

// const toggleCompleted = id => {
//   console.log(id)
//   dispatch({type: 'TOGGLE_ITEM', payload: id})
// }

// const clearCompleted = () => {
//   dispatch({type: 'CLEAR_COMPLETED'})
// }

// const changeItem = e => {
//   setTodo(e.target.value)
//   // dispatch({type: 'CHANGE_ITEM', payload: e.target.value});
// }