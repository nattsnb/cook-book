import { Recipe } from "./types/Recipe.ts";

export const createRecipeFromData = (data: Recipe) => {
  return {
    id: data.id,
    category: data.category,
    title: data.title,
    ingredients: data.ingredients.map((ingredient: any) => ({
      id: ingredient.id,
      amount: ingredient.amount,
      unit: ingredient.unit,
      name: ingredient.name,
      isAllergen: ingredient.isAllergen,
    })),
    cookingSteps: data.cookingSteps.map((step: any) => ({
      id: step.id,
      step: step.step,
    })),
    photoURL: data.photoURL,
    numberOfPortions: data.numberOfPortions,
    cookingTimeInMinutes: data.cookingTimeInMinutes,
    rating: data.rating,
  };
};
