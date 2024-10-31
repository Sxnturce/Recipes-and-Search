import { useEffect } from "react";
import { useCocktail } from "../stores/cocktail-store";
import { useForm } from "react-hook-form";
import { Cocktail } from "../types";
import InputError from "../components/InputError";
import Cocktails from "../components/Cocktails";

function Home() {
	const { getCategory, categories, setDrinks } = useCocktail();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<Cocktail>();

	function submit(data: Cocktail) {
		setDrinks(data);
	}

	useEffect(() => {
		getCategory();
	}, []);
	return (
		<>
			<section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6 w-full h-dvh place-content-center">
				<form
					className="w-full max-w-xl mx-auto bg-white p-4 md:p-6 rounded shadow-md flex flex-col gap-6 md:gap-10 justify-center items-center"
					onSubmit={handleSubmit(submit)}
				>
					<div className="flex flex-col gap-2 w-full">
						<label htmlFor="name" className="font-bold text-lg">
							Nombre o Ingredientes
						</label>
						<input
							type="text"
							id="name"
							className="p-2 bg-slate-50 rounded outline-none ring-gray-200 ring-2 focus:ring-blue-500"
							placeholder="Nombre o Ingrediente Ej. Vodka, Tequila, Café"
							{...register("name", {
								required: "Este campo es requerido.",
							})}
						/>
						{errors.name && <InputError>{errors.name.message}</InputError>}
					</div>
					<div className="flex flex-col gap-2 w-full">
						<label htmlFor="category" className="font-bold text-lg">
							Categoria
						</label>
						<select
							id="category"
							className="p-2 bg-slate-50 rounded outline-none ring-gray-200 ring-2 focus:ring-blue-500"
							{...register("category", {
								required: "Seleccione una categoria.",
							})}
						>
							<option value="">--Seleccione--</option>
							{categories.map((c, i) => (
								<option key={i} value={c.strCategory}>
									{c.strCategory}
								</option>
							))}
						</select>
						{errors.category && (
							<InputError>{errors.category.message}</InputError>
						)}
					</div>
					<input
						type="submit"
						value="Buscar Recetas"
						className="w-full bg-orange-500 text-white font-bold uppercase rounded-md hover:bg-orange-700 transition-colors ease-in-out duration-300 p-2 cursor-pointer"
					/>
				</form>
				<div>
					<img
						src="/hero-img.webp"
						alt="img-hero-cocktail"
						className="max-w-[300px] lg:max-w-max mx-auto"
					/>
				</div>
			</section>
			<Cocktails />
		</>
	);
}

export default Home;
