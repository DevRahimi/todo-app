import { Todo } from './AddTodo';
import { FaTrashAlt } from 'react-icons/fa';

interface Props {
	todos: Todo[];
	setTodos: (todos: Todo[]) => void;
}

const CompletedTodos = ({ todos, setTodos }: Props) => {
	const handleDeleteTodo = (id: number) => {
		const updatedTodos = todos.filter(todo => todo.id !== id);
		setTodos(updatedTodos);
	};

	if (todos.length === 0)
		return (
			<h1 className="mt-4 text-center text-2xl font-bold">
				No Todos have been completed
			</h1>
		);

	const completeTodos = todos.filter(todo => todo.completed);

	return (
		<div className="container mx-auto flex-col gap-2 p-4">
			<h1 className="mt-4 text-2xl font-bold">
				{completeTodos.length} Todos completed!
			</h1>
			{completeTodos.map(todo => (
				<div
					className="my-4 grow items-center justify-between rounded-lg bg-white px-4 py-2"
					key={todo.id}
				>
					<div className="flex items-center justify-between">
						<p className="grow text-slate-400">{todo.text}</p>
						<div className="flex gap-2">
							<button
								onClick={() => handleDeleteTodo(todo.id)}
								className="rounded-lg border border-red-500 bg-white px-4 py-2 text-red-500 transition duration-300 hover:bg-red-500 hover:text-white"
							>
								<FaTrashAlt />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CompletedTodos;
