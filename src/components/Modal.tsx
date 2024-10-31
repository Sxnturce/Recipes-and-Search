import { Fragment, useMemo } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { useCocktail } from "../stores/cocktail-store";
import clsx from "clsx";
import Recipes from "./Recipes";
import { Drink } from "../types";
import "react-toastify/dist/ReactToastify.css";

export default function Modal() {
	const { modal, closeModal, drink, addFavorite, favorites, deleteFavorite } =
		useCocktail();

	const isFavorite = useMemo(
		() => (id: Drink["idDrink"]) =>
			favorites.filter((f) => f.idDrink === id)[0],
		[modal, favorites]
	);

	const { strDrink, strDrinkThumb, idDrink } = drink;
	return (
		<>
			<Transition appear as={Fragment} show={modal}>
				<Dialog as="div" className="relative z-30" onClose={closeModal}>
					<TransitionChild as={Fragment}>
						<DialogBackdrop
							className={clsx([
								// Base styles
								"fixed inset-0 bg-black bg-opacity-75 transition",
								// Shared closed styles
								"data-[closed]:opacity-0",
								// Entering styles
								"data-[enter]:duration-300 data-[enter]:ease-out",
								// Leaving styles
								"data-[leave]:duration-200 data-[leave]:ease-in",
							])}
						/>
					</TransitionChild>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center relative">
							<TransitionChild as={Fragment}>
								<DialogPanel
									className={clsx([
										// Base styles
										"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6 font-sans flex flex-col gap-10",
										// Shared closed styles
										"data-[closed]:opacity-0 data-[closed]:scale-95",
										// Entering styles
										"data-[enter]:duration-300 data-[enter]:ease-out",
										// Leaving styles
										"data-[leave]:duration-200 data-[leave]:ease-in",
									])}
								>
									<DialogTitle
										as="h3"
										className="text-gray-900 text-3xl font-bold my-5 text-center"
									>
										{strDrink}
									</DialogTitle>
									<img
										src={strDrinkThumb}
										alt="img-card"
										className="w-full mx-auto max-w-[350px] rounded shadow"
									/>
									<DialogTitle
										as="h3"
										className="text-gray-900 text-xl font-bold"
									>
										Ingredientes y Cantidades
										<Recipes />
									</DialogTitle>

									<DialogTitle
										as="h3"
										className="text-gray-900 text-xl font-bold"
									>
										Instrucciones
										<p className="font-normal text-[1rem] text-pretty mt-2">
											{drink.strInstructions}
										</p>
									</DialogTitle>
									<div className="flex flex-col sm:flex-row  sm:items-center justify-between gap-4  sm:gap-8">
										<button
											className="bg-gray-600 hover:bg-gray-700 transition-colors ease-in-out duration-300 text-white p-2 flex-1 rounded"
											onClick={closeModal}
										>
											Cerrar
										</button>
										{isFavorite(idDrink) ? (
											<button
												className="bg-orange-500 hover:bg-orange-700 transition-colors ease-in-out duration-300 text-white p-2 flex-1 rounded"
												onClick={() => deleteFavorite(idDrink)}
											>
												Eliminar Favoritos
											</button>
										) : (
											<button
												className="bg-orange-500 hover:bg-orange-700 transition-colors ease-in-out duration-300 text-white p-2 flex-1 rounded"
												onClick={() =>
													addFavorite({ strDrink, strDrinkThumb, idDrink })
												}
											>
												Agregar Favoritos
											</button>
										)}
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
