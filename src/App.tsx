import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar';

function App() {
	return (
		<>
			<NavBar />
			<AddTodo />
			<div className="container mx-auto p-4">
				<h1 className="text-2xl font-bold">Todo List</h1>
				<ul className="mt-4">
					<li className="flex items-center justify-between">
						<span className="text-lg">Learn React</span>
						<div className="flex items-center">
							<button className="rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
								Edit
							</button>
							<button className="ml-2 rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
								Delete
							</button>
						</div>
					</li>
					<li className="flex items-center justify-between">
						<span className="text-lg">Learn React</span>
						<div className="flex items-center">
							<button className="rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
								Edit
							</button>
							<button className="ml-2 rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
								Delete
							</button>
						</div>
					</li>
					<li className="flex items-center justify-between">
						<span className="text-lg">Learn React</span>
						<div className="flex items-center">
							<button className="rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
								Edit
							</button>
							<button className="ml-2 rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
								Delete
							</button>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}

export default App;
