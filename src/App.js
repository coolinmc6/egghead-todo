import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateID, findByID, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';


class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Learn JSX note 2', isComplete: false},
      {id: 3, name: 'Learn JSX 3', isComplete: false},
    ],
    currentTodo: ''
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos: updatedTodos})
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findByID, toggleTodo, partial(updateTodo, this.state.todos))
    // const todo = findByID(id, this.state.todos);
    // const toggled = toggleTodo(todo);
    const updatedTodos = getUpdatedTodos(id, this.state.todos)
    this.setState({todos: updatedTodos});
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newID = generateID()
    const newTodo = {id: newID, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    })
  }



  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React ToDos</h2>
        </div>

        <div className="Todo-App">
          { this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }
          <TodoForm handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo}
                    handleSubmit={submitHandler}/>
          <TodoList handleToggle={this.handleToggle} 
                    todos={this.state.todos}
                    handleRemove={this.handleRemove}/>
          
        </div>
      </div>
    );
  }
}

export default App;
