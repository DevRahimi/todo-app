import { FaGithub, FaLinkedin } from 'react-icons/fa';

const NavBar = () => {
	return (
		<nav className="bg-green-500 text-white">
			<div className="container mx-auto flex items-center justify-between p-3">
				<div className="flex items-center">
					<img src="src/assets/todo-logo.svg" className="h-8 w-auto" />
					<h1 className="mx-2 text-2xl font-bold">Todo App</h1>
				</div>
				<div className="flex items-center">
					<a href="https://github.com/DevRahimi" target="_blank">
						<FaGithub className="text-2xl text-white hover:text-gray-400" />
					</a>
					<a
						href="https://www.linkedin.com/in/ahmed-rahimi-a33755259/"
						target="_blank"
					>
						<FaLinkedin className="ml-4 text-2xl text-white hover:text-gray-400" />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
