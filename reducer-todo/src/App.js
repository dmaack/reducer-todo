import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { initialState, reducer } from '../reducers/titleReducer';


import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

import { FaSearch } from "react-icons/fa";

const todoData = [
  {
    task: 'Start Project',
    id: 123,
    completed: false 
  }
]


const App = props => {
//  const [todo, setTodo] = useState(todoData)
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  
  toggleItem = id => {
    let todos = todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })
    this.setState({todos})
  }; //closes toggleItem

  addItem = e => {
    e.preventDefault();
    const newItem = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem],
      todo: ''
    });
  } // closes addTask

  changeItem = e => this.setState({ [e.target.name]: e.target.value})
  
clearCompleted = e => {
  e.preventDefault();
  let todos = this.state.todos.filter(todo => !todo.completed);
  this.setState({todos});
}

  
    return (
      <AppContainer>
      <GlobalStyle/>
        <HeaderContainer>
          <h2>My Todo List: </h2>
          <SeachContainer className="Search">
          <label>
          <FaSearch/>
          <SearchInput
            type="text"
            placeholder="Search"
            // value={searchTerm}
            // onChange={handleChange}
          />
          </label>
        </SeachContainer>
          </HeaderContainer>
          <FormContainer>
          <TodoForm 
            value={this.state.todo}
            handlechangeItem={this.changeItem}
            handleaddItem={this.addItem}
            handleclearCompleted={this.clearCompleted}
          />
          <TodoList 
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          />
        </FormContainer>
        
      </AppContainer>
    );
  
 } //closes App

export default App;


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: 'Montserrat', sans-serif;
  }
  
  p{
    width: 300px;
    border: 1px solid #36413E;
    padding: 2% ;
    border-radius: 6px;
    margin: 2% 0 0 0;
  }
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: #212922; */
  background-color: #33658A;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  background-color: #AED1E6;
  width: 100%;
  text-align: center;
  padding: 5% 0 0 0;
  margin-top: 5%;
  font-size: 2.5rem;
  color: 36413E;
`;

const FormContainer = styled.div`
  width: 60%;
  min-height: 50vh;
  background: #CFE8EF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4% 0;
  border-radius: 3px;
  margin-top: 5%;
`;

const SeachContainer = styled.div`
  width: 300px;
  border-top: 1px solid #36413E;
  border-right: 1px solid #36413E;
  border-left: 1px solid #36413E;
  padding: 2% 0 1% 0;
  margin: 50px auto 0 auto;
  background-color: #AED1E6;
`;

const SearchInput = styled.input`
    margin: 10px auto 15px auto;
    width: 150px;
    padding: 3%;
    border-radius: 3px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #36413E;
    background-color: #AED1E6;
    color: white;
    font-size: 1.8rem;
`;