// export const addTodo = (list, item) => {
// 	return list.concat(item);
// }

// Re-written as:
// export const addTodo = (list, item) => list.concat(item);

// OR this:
export const addTodo = (list, item) => [...list, item];

export const generateID = () => Math.floor(Math.random()*1000000);

export const findByID = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const updateTodo = (list, updated) => {
	const updatedIndex = list.findIndex(item => item.id === updated.id)

	// the return statement slices the array from 0 to the item in the array we are updating, 
	// puts in the updated item, 'updated', and then adds the rest of the array using the 
	// spread operator that starts from 1 after the updated array's location to the end
	return [
		...list.slice(0,updatedIndex),
		updated,
		...list.slice(updatedIndex+1)
	]
}