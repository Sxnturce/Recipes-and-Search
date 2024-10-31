import Spinner from "./Spinner";
import Card from "./Card";
import { useCocktail } from "../stores/cocktail-store";

function Cocktails() {
	const drinks = useCocktail((state) => state.drinks);
	const load = useCocktail((state) => state.load);

	return (
		<>
			{load ? (
				<Spinner />
			) : (
				<section className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{drinks.map((d) => (
						<Card item={d} key={d.idDrink} />
					))}
				</section>
			)}
		</>
	);
}

export default Cocktails;
