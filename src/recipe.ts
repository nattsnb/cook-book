import { Recipe } from "./shared/types/Recipe.ts";

export const recipe: Recipe = {
  id: 0,
  title: "Hot cocoa",
  ingredients: [
    {
      id: 0,
      amount: 3,
      unit: "tbsp",
      name: "cacao",
      isAllergen: true,
    },
    {
      id: 1,
      amount: 1,
      unit: "cup",
      name: "milk",
      isAllergen: true,
    },
  ],
  cookingSteps: [
    { id: 0, step: "pour together and mix" },
    { id: 1, step: "heat stirring until is boiling" },
  ],
  photoURL: "https://picsum.photos/200/300",
  numberOfPortions: 3,
  cookingTimeInMinutes: 15,
  rating: 4.5,
};
