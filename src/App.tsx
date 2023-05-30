import { useState } from 'react';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';
import NavBar from './components/NavBar';
import { Todo } from './components/AddTodo';

function App() {
	// // store todos in local storage to persist data on refresh or empty list
	// const [todos, setTodos] = useState<Todo[]>(() => {
	// 	const localData = localStorage.getItem('todos');
	// 	return localData ? JSON.parse(localData) : [];
	// });

	// // update local storage when todos change
	// localStorage.setItem('todos', JSON.stringify(todos));

	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, text: 'Learn React', completed: false },
		{ id: 2, text: 'Learn TypeScript', completed: false },
		{ id: 3, text: 'Learn Tailwind CSS', completed: false },
	]);

	return (
		<>
			<NavBar />
			<AddTodo todos={todos} setTodos={setTodos} />
			<ListTodos todos={todos} setTodos={setTodos} />
		</>
	);
}

export default App;
