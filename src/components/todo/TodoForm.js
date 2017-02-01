import React from 'react';

export const TodoForm = (props) => (
	<form onSubmit={props.handleSubmit}>
    	<input 	type="text" 
    			onChange={props.handleInputChange}
    			value={props.currentTodo} 
    			/>
	</form>
);

// to ensure they are passing in the right props, we have to validate the component input
// with propTypes

// this prevents people from passing in the wrong data type
TodoForm.propTypes = {
	// key that matches are props
	currentTodo: React.PropTypes.string.isRequired,
	handleInputChange: React.PropTypes.func.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
}