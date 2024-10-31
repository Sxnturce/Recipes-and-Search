import axios from "axios";
import {
	categorySchema,
	drinksSchema,
	recipeNullish,
	recipeSchema,
} from "../schemas/cocktailSchema";
import { Cocktail, Drink } from "../types";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getCategoryes = async () => {
	const url = `${baseURL}/list.php?c=list`;
	const { data } = await axios(url);
	const result = categorySchema.safeParse(data.drinks);
	if (result.success) {
		return result.data;
	}
};

export const filterResult = async (filters: Cocktail) => {
	const url = `${baseURL}/filter.php?i=${filters.name}&c=${filters.category}`;
	const { data } = await axios(url);
	const result = drinksSchema.safeParse(data.drinks);
	if (result.success) {
		return result.data.slice(0, 30);
	}
};

export const findById = async (id: Drink["idDrink"]) => {
	const url = `${baseURL}/lookup.php?i=${id}`;
	const { data } = await axios(url);

	const resultRecipe = recipeSchema.safeParse(data.drinks[0]);
	const resultNullish = recipeNullish.safeParse(data.drinks[0]);

	if (resultRecipe.success && resultNullish.success) {
		return {
			recipe: resultNullish.data,
			drink: resultRecipe.data,
		};
	}
};
