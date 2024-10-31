import { z } from "zod";
import {
	cocktailSchema,
	categorySchema,
	drinksSchema,
	drinkSchema,
	recipeSchema,
	recipeNullish,
} from "../schemas/cocktailSchema";

export type Cocktail = z.infer<typeof cocktailSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Drinks = z.infer<typeof drinksSchema>;
export type Drink = z.infer<typeof drinkSchema>;
export type Recipe = z.infer<typeof recipeSchema>;
export type RecipeNullish = z.infer<typeof recipeNullish>;
