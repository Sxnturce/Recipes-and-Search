import { create } from "zustand";
import { toast } from "react-toastify";
import { devtools, persist } from "zustand/middleware";
import {
	getCategoryes,
	filterResult,
	findById,
} from "../services/cocktail-service";
import {
	Category,
	Cocktail,
	Drink,
	Drinks,
	Recipe,
	RecipeNullish,
} from "../types";

type State = {
	categories: Category;
	drinks: Drinks;
	favorites: Drinks;
	drink: Recipe;
	recipe: RecipeNullish;
	load: boolean;
	modal: boolean;
};

type Actions = {
	getCategory: () => Promise<void>;
	setDrinks: (cocktail: Cocktail) => Promise<void>;
	addFavorite: (item: Drink) => void;
	deleteFavorite: (id: Drink["idDrink"]) => void;
	getById: (id: Drink["idDrink"]) => Promise<void>;
	closeModal: () => void;
};

export const useCocktail = create<State & Actions>()(
	devtools(
		persist(
			(set) => ({
				categories: [],
				drinks: [],
				favorites: [],
				drink: {} as Recipe,
				recipe: {} as RecipeNullish,
				load: false,
				modal: false,

				async getCategory() {
					const result = await getCategoryes();
					set(() => ({ categories: result }));
				},

				async setDrinks(cocktail: Cocktail) {
					set(() => ({ drinks: [], load: true }));
					const arr = await filterResult(cocktail);
					set(() => ({ drinks: arr, load: false }));
				},

				async getById(id) {
					const result = await findById(id);

					set((state) => ({
						modal: !state.modal,
						drink: result?.drink,
						recipe: result?.recipe,
					}));
				},

				addFavorite(item) {
					toast.success("Agregado Correctamente");
					set((state) => ({
						favorites: [...state.favorites, item],
					}));
				},

				deleteFavorite(id) {
					toast.error("Eliminado Correctamente");
					set((state) => ({
						favorites: state.favorites.filter((f) => f.idDrink !== id),
						modal: false,
					}));
				},

				closeModal() {
					set(() => ({
						modal: false,
					}));
				},
			}),
			{
				name: "store-cocktails",
				partialize: (state) => ({ favorites: state.favorites }),
			}
		)
	)
);
