import { Todo } from './AddTodo';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

interface Props {
	todos: Todo[];
	setTodos: (todos: Todo[]) => void;
}

const ListTodos = ({ todos, setTodos }: Props) => {
	// delete todo
	const handleDeleteTodo = (id: number) => {
		const updatedTodos = todos.filter(todo => todo.id !== id);
		setTodos(updatedTodos);
	};

	// complete todo
	const handleCompleteTodo = (id: number) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) return { ...todo, completed: !todo.completed };
				else return todo;
			})
		);
	};

	if (todos.length === 0)
		return <h1 className="mt-4 text-center text-2xl font-bold">No Todos</h1>;

	const incompleteTodos = todos.filter(todo => !todo.completed);

	return (
		<div className="container mx-auto flex-col gap-2 p-4">
			<h1 className="mt-4 text-2xl font-bold">
				{incompleteTodos.length} Todos
			</h1>
			{incompleteTodos.map(todo => (
				<div
					className="mx-4 my-4 grow transform items-center justify-between rounded-lg bg-white px-4 py-2
          transition duration-300 ease-in-out hover:scale-[1.03] hover:font-semibold hover:shadow-sm hover:shadow-slate-400"
					key={todo.id}
				>
					<div className="flex items-center justify-between">
						<p className="grow">{todo.text}</p>
						<div className="flex gap-2">
							<button
								onClick={() => handleDeleteTodo(todo.id)}
								className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-400"
							>
								<FaTrashAlt />
							</button>
							<button
								onClick={() => handleCompleteTodo(todo.id)}
								className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-400"
							>
								<FaCheck />
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ListTodos;
