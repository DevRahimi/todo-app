import { useState } from 'react';
import AddTodo from './components/AddTodo';
import { Todo } from './components/AddTodo';
import NavBar from './components/NavBar';
import ListTodos from './components/ListTodos';
import CompletedTodos from './components/ComletedTodos';

function App() {
	const [todos, setTodos] = useState<Todo[]>(() => {
		const localData = localStorage.getItem('todos');
		return localData ? JSON.parse(localData) : [];
	});

	localStorage.setItem('todos', JSON.stringify(todos));

	return (
		<>
			<NavBar />
			<AddTodo todos={todos} setTodos={setTodos} />
			<ListTodos todos={todos} setTodos={setTodos} />
			<CompletedTodos todos={todos} setTodos={setTodos} />
		</>
	);
}

export default App;
