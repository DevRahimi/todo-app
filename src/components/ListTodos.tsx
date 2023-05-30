import { Todo } from './AddTodo';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

interface Props {
	todos: Todo[];
}

const ListTodos = ({ todos }: Props) => {
	if (todos.length === 0) return <p className="text-center">No Todos</p>;

	return (
		<div className="container mx-auto flex-col gap-2 p-4">
			{todos.map(todo => (
				<div
					className="mx-4 my-4 grow transform items-center justify-between rounded-lg bg-white px-4 py-2
          transition duration-300 ease-in-out hover:scale-[1.03] hover:font-semibold hover:shadow-sm hover:shadow-slate-400"
					key={todo.id}
				>
					<div className="flex items-center justify-between">
						<p className="grow">{todo.text}</p>
						<div className="flex gap-2">
							<button className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-400">
								<FaTrashAlt />
							</button>
							<button className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-400">
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
