import { useCocktail } from "../stores/cocktail-store";

function Recipes() {
	const { recipe } = useCocktail();

	return (
		<>
			<ul className="flex flex-col gap-1 mt-4 list-disc">
				{[...Array(6)].map((_, i) => {
					const ingredient =
						recipe[`strIngredient${i + 1}` as keyof typeof recipe];
					const recet = recipe[`strMeasure${i + 1}` as keyof typeof recipe];
					return (
						ingredient && (
							<li key={i} className="text-[1.01rem] ml-6 font-medium">
								{ingredient} {recet && <span> - {recet}</span>}
							</li>
						)
					);
				})}
			</ul>
		</>
	);
}

export default Recipes;
