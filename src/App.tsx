function App() {
	return (
		<>
			<header className="bg-slate-900 text-white">
				<div className="container mx-auto flex items-center justify-between p-4">
					<div className="flex items-center">
						<img src="" className="h-8 w-auto" />
						<h1 className="ml-2 text-2xl font-bold">Todo App</h1>
					</div>
					<div className="flex items-center">
						<button className="rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
							Login
						</button>
						<button className="ml-2 rounded-lg bg-slate-800 px-3 py-2 text-white hover:bg-slate-700">
							Sign Up
						</button>
					</div>
				</div>
			</header>
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
