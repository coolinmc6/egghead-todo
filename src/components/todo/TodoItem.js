import React from 'react';

export const TodoItem = (props) => {
	return (
		<li>
		  {/* returns an error => <input type="checkbox" checked={todo.isComplete}/>{todo.name}*/}
		  <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}

		</li>
	)
}

TodoItem.propTypes = {
	name: React.PropTypes.string.isRequired,
	isComplete: React.PropTypes.bool,
	id: React.PropTypes.number.isRequired
}