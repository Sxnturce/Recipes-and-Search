import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "/logo.svg";
import Modal from "../components/Modal";
import { ToastContainer } from "react-toastify";

function Home() {
	return (
		<>
			<header className="w-full bg-neutral-800 px-2 py-4 shadow-md fixed top-0 z-20">
				<div className="w-11/12 mx-auto flex items-center justify-between">
					<Link to={"/"}>
						<img src={logo} alt="logo-header" className="w-20" />
					</Link>
					<nav className="text-gray-300/80 text-lg font-medium flex items-center gap-10">
						<NavLink
							to={"/"}
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Inicio
						</NavLink>
						<NavLink
							to={"/favoritos"}
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Favoritos
						</NavLink>
					</nav>
				</div>
			</header>
			<main className="w-11/12 max-w-7xl mx-auto flex flex-col gap-12">
				{<Outlet />}
			</main>
			<Modal />
			<ToastContainer autoClose={1000} hideProgressBar={true} />
		</>
	);
}

export default Home;
