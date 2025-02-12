import { useContext } from "react";
import { RecipeContextType } from "./types/RecipeContextType.ts";
import { RecipeContext } from "./components/RecipeContextProvider";
import { Recipe } from "./types/Recipe.ts";
import { useParams } from "react-router-dom";

type ParamsInterface = {
  recipeId: string;
};

export function getRecipeToDisplayFromParams() {
  const { savedRecipes } = useContext<RecipeContextType>(RecipeContext);
  const params = useParams<ParamsInterface>();
  let recipeId = null;
  if (params.recipeId) {
    recipeId = String(params.recipeId);
  }
  return savedRecipes?.find((recipe: Recipe) => recipe.id === recipeId);
}
