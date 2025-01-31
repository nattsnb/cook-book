import theme from "./shared/utils/theme.ts";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
import { createContext, useState } from "react";
import { RecipeContextType } from "./shared/types/RecipeContextType.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainView } from "./pages/MainView";
import { CategoryView } from "./pages/CategoryView";
import { RecipeView } from "./pages/RecipeView";
import { FormView } from "./pages/FormView";
import "./playfairDisplay.css";
import { useLocalStorage } from "./useLocalStorage.ts";

export const RecipeContext = createContext<RecipeContextType>({});

function App() {
  const [activeRecipeId, setActiveRecipeId] = useState<number | null>(null);
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(true);
  const [savedRecipes, setSavedRecipes] = useLocalStorage({
    key: "recipe",
    defaultValue: [],
  });

  return (
    <BrowserRouter>
      <RecipeContext.Provider
        value={{
          activeRecipeId,
          setActiveRecipeId,
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
