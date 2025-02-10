import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Recipe, RECIPES_STORAGE_KEY } from "../../types/Recipe.ts";
import { RecipeContextType } from "../../types/RecipeContextType.ts";

export const RecipeContext = createContext<RecipeContextType>({
  savedRecipes: [],
  setSavedRecipes: () => {},
});

export function RecipeContextProvider({ children }: PropsWithChildren) {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[] | null>(null);

  useEffect(function loadRecipesFromLocalStorageOnInit() {
    const recipesJson = localStorage.getItem(RECIPES_STORAGE_KEY);
    try {
      if (recipesJson) {
        const loadedRecipes = JSON.parse(recipesJson);
        setSavedRecipes(loadedRecipes);
      }
    } catch (e) {
      setSavedRecipes([]);
    }
  }, []);

  useEffect(
    function saveRecipesToLocalStorageOnChange() {
      if (savedRecipes) {
        const recipesJsonToStore = JSON.stringify(savedRecipes);
        localStorage.setItem(RECIPES_STORAGE_KEY, recipesJsonToStore);
      }
    },
    [savedRecipes],
  );
  return (
    <>
      <RecipeContext.Provider
        value={{
          savedRecipes,
          setSavedRecipes,
        }}
      >
        {children}
      </RecipeContext.Provider>
    </>
  );
}
