import { FaPlus, FaCalendarAlt } from 'react-icons/fa';

const AddTodo = () => {
	return (
		<div className="container mx-auto flex justify-between gap-2 p-4">
			<input
				type="text"
				className="grow rounded-lg border border-gray-400 px-4 py-2 focus:outline-none"
				placeholder="Add Todo..."
			/>
			<button className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-400">
				Add
			</button>
		</div>
	);
};

export default AddTodo;
