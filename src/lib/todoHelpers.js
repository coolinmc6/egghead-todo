// export const addTodo = (list, item) => {
// 	return list.concat(item);
// }

// Re-written as:
// export const addTodo = (list, item) => list.concat(item);

// OR this:
export const addTodo = (list, item) => [...list, item];

export const generateID = () => Math.floor(Math.random()*1000000);