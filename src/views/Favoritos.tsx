import Card from "../components/Card";
import { useCocktail } from "../stores/cocktail-store";

function Favoritos() {
	const favorites = useCocktail((state) => state.favorites);
	const isEmpty = favorites.length === 0;

	return (
		<>
			<section className="mt-[140px]">
				{isEmpty ? (
					<p className="text-2xl text-gray-500">
						No tienes agregado ningun favorito.
					</p>
				) : (
					<section className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{favorites.map((d) => (
							<Card item={d} key={d.idDrink} />
						))}
					</section>
				)}
			</section>
		</>
	);
}

export default Favoritos;
