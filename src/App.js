import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateID} from './lib/todoHelpers';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Learn JSX note 2', isComplete: false},
        {id: 3, name: 'Learn JSX 3', isComplete: false},
      ],
      currentTodo: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newID = generateID()
    const newTodo = {id: newID, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }

  handleInputChange (e) {
    this.setState({
      currentTodo: e.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React ToDo's</h2>
        </div>

        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo}
                    handleSubmit={this.handleSubmit}/>
          <TodoList todos={this.state.todos}/>
          
        </div>
      </div>
    );
  }
}

export default App;
