import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHome from "./Layout/LayoutHome";
import Favoritos from "./views/Favoritos";
import Home from "./views/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LayoutHome />}>
						<Route index element={<Home />} />
						<Route path="favoritos" element={<Favoritos />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
