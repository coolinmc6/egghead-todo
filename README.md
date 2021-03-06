# README

This app is based on Egghead.io's [Build Your First Production Quality React App](https://egghead.io/courses/build-your-first-production-quality-react-app) using React's Create React App CLI.
For my other React apps, please see [React-App](https://github.com/coolinmc6/react-app).

- You only need `export const TodoList` if you are creating a stateless functional component.

- There is a lot of good stuff on testing in Lecture 11.  Get those unit tests and understand
how it works.  Take some good notes and describe what each of these tests is looking for.
- I should also try re-writing some of the functions just so that I understand how they work.
- Get notes on the JS methods that he uses

## Notes
- this is pretty sweet:
```sh
npm i -g json-server
```

  - Make a `db.json` file in your repo's directory

```sh
json-server -p 8080 --watch db.json
```



## Lecture 14: Create a Pipe Function to Enable Function Composition

## Lecture 15: Remove Items from a List without Mutations
- finished

## Lecture 16: Build a Link Component to Navigate to Routes in React
- start here

## Lecture :

## Lecture :

## Lecture 19: Keep Application State in Sync with Browser History

## Lecture :

## Lecture :

## Lecture :

## Lecture :

## Lecture :

## Lecture :

## Particular Items

### Deleting a ToDo
```javascript
// App.js
handleRemove = (id, evt) => {
  evt.preventDefault();
  const updatedTodos = removeTodo(this.state.todos, id)
  this.setState({todos: updatedTodos})
  destroyTodo(id)
    .then(() => this.showTempMessage('Todo Removed'))
}

// in the render() function
<TodoList handleToggle={this.handleToggle} 
          todos={displayTodos}
          handleRemove={this.handleRemove}/>

// TodoList.js
<ul>
  { props.todos.map(todo => <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo} handleRemove={props.handleRemove}/> )}
</ul>

// TodoItem.js
export const TodoItem = (props) => {
	const handleToggle = partial(props.handleToggle, props.id)
	const handleRemove = partial(props.handleRemove, props.id)
	return (
		<li>
		  {/* returns an error => <input type="checkbox" checked={todo.isComplete}/>{todo.name}*/}
		  <span className="delete-item"><a href="#" onClick={handleRemove}>X</a></span>
		  <input type="checkbox" onChange={handleToggle} 
		  defaultChecked={props.isComplete}/>{props.name}

		</li>
	)
}

// src/lib/utils.js
export const partial = (fn, ...args) => fn.bind(null, ...args)
```

the handleRemove function takes an id and an event (which I don't know how to do)



