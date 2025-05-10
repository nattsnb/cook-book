import { Recipe } from "./Recipe.ts";

export interface RecipeContextType {
  savedRecipes: Recipe[] | null;
  setSavedRecipes: (savedRecipes: Recipe[]) => void;
}
