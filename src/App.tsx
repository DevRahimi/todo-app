import { useState } from 'react';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';
import NavBar from './components/NavBar';
import { Todo } from './components/AddTodo';

function App() {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, text: 'Learn React' },
		{ id: 2, text: 'Learn TypeScript' },
		{ id: 3, text: 'Learn Tailwind CSS' },
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
