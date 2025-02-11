import { Recipe } from "../shared/types/Recipe.ts";

export const initialValues: Recipe = {
  id: 0,
  category: null,
  title: "",
  photoURL: "",
  rating: null,
  numberOfPortions: null,
  cookingTimeInMinutes: null,
  ingredients: [
    {
      id: 0,
      amount: null,
      unit: null,
      name: "",
      isAllergen: null,
    },
  ],
  cookingSteps: [
    {
      id: 0,
      step: "",
    },
  ],
};
