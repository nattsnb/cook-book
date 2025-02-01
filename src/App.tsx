import theme from "./shared/utils/theme.ts";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
import { createContext, useEffect, useState } from "react";
import { RecipeContextType } from "./shared/types/RecipeContextType.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainView } from "./pages/MainView";
import { CategoryView } from "./pages/CategoryView";
import { RecipeView } from "./pages/RecipeView";
import { FormView } from "./pages/FormView";
import "./playfairDisplay.css";
import { Recipe, RECIPES_STORAGE_KEY } from "./shared/types/Recipe.ts";

export const RecipeContext = createContext<RecipeContextType>({
  isEditModeOn: false,
  setIsEditModeOn: () => {},
  savedRecipes: [],
  setSavedRecipes: () => {},
});

function App() {
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(true);
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
    <BrowserRouter>
      <RecipeContext.Provider
        value={{
          isEditModeOn,
          setIsEditModeOn,
          savedRecipes,
          setSavedRecipes,
        }}
      >
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/category/:categoryId" element={<CategoryView />} />
              <Route path="/recipe/:recipeId" element={<RecipeView />} />
              <Route path="/newRecipeForm/" element={<FormView />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecipeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
