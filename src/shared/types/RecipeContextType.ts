import { Recipe } from "./Recipe.ts";

export interface RecipeContextType {
  isEditModeOn: boolean;
  setIsEditModeOn: (isEditModeOn: boolean) => void;
  savedRecipes: Recipe[] | null;
  setSavedRecipes: (savedRecipes: Recipe[]) => void;
}
