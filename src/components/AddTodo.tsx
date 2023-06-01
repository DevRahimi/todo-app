import { useState } from 'react';

export interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

export interface TodoProps {
	todos: Todo[];
	setTodos: (todos: Todo[]) => void;
}

const AddTodo = ({ todos, setTodos }: TodoProps) => {
	const [value, setValue] = useState('');

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleAddTodo = () => {
		if (!value) return;
		const newTodo: Todo = {
			id: todos.length + 1,
			text: value,
			completed: false,
		};

		setTodos([...todos, newTodo]);
		setValue('');
	};

	return (
		<div className="container mx-auto flex justify-between gap-2 p-4">
			<input
				type="text"
				className="grow rounded-lg border border-gray-400 px-4 py-2 focus:outline-2 focus:outline-slate-400"
				placeholder="Add Todo..."
				value={value}
				onChange={handleInput}
			/>
			<button
				className="rounded-lg border border-sky-400 bg-sky-400 px-4 py-2 text-white transition duration-300 hover:bg-white hover:text-sky-400"
				type="submit"
				onClick={handleAddTodo}
			>
				Add Todo
			</button>
		</div>
	);
};

export default AddTodo;
