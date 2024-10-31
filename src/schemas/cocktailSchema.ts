import { z } from "zod";

const cocktailSchema = z.object({
	name: z.string(),
	category: z.string(),
});

const categorySchema = z.array(
	z.object({
		strCategory: z.string(),
	})
);

const drinksSchema = z.array(
	z.object({
		strDrink: z.string(),
		strDrinkThumb: z.string(),
		idDrink: z.string(),
	})
);

const drinkSchema = z.object({
	strDrink: z.string(),
	strDrinkThumb: z.string(),
	idDrink: z.string(),
});

const recipeSchema = z.object({
	strDrink: z.string(),
	strDrinkThumb: z.string(),
	idDrink: z.string(),
	strInstructions: z.string(),
});

const recipeNullish = z.object({
	strIngredient1: z.string().nullable(),
	strIngredient2: z.string().nullable(),
	strIngredient3: z.string().nullable(),
	strIngredient4: z.string().nullable(),
	strIngredient5: z.string().nullable(),
	strIngredient6: z.string().nullable(),
	strMeasure1: z.string().nullable(),
	strMeasure2: z.string().nullable(),
	strMeasure3: z.string().nullable(),
	strMeasure4: z.string().nullable(),
	strMeasure5: z.string().nullable(),
	strMeasure6: z.string().nullable(),
});

export {
	cocktailSchema,
	categorySchema,
	drinksSchema,
	drinkSchema,
	recipeSchema,
	recipeNullish,
};
