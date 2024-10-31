import { Drink } from "../types";
import { useCocktail } from "../stores/cocktail-store";

type CardProp = {
	item: Drink;
};

function Card({ item }: CardProp) {
	const getById = useCocktail((state) => state.getById);
	return (
		<div className="bg-white rounded shadow flex flex-col gap-2 p-4">
			<div className="w-full overflow-hidden">
				<img
					src={item.strDrinkThumb}
					alt=""
					className="w-full hover:scale-110 hover:rotate-3 transition-transform ease-in-out duration-300 z-10 aspect-square"
				/>
			</div>
			<div className="flex flex-col gap-6 flex-grow py-2">
				<p className="font-bold text-black text-lg">{item.strDrink}</p>
			</div>
			<button
				className="w-full p-2 bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors ease-in-out duration-300"
				onClick={() => getById(item.idDrink)}
			>
				Ver Receta
			</button>
		</div>
	);
}

export default Card;
