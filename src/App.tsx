import theme from "./shared/utils/theme.ts";
import { ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainView } from "./pages/MainView";
import { CategoryView } from "./pages/CategoryView";
import { RecipeView } from "./pages/RecipeView";
import { FormView } from "./pages/FormView";
import "./playfairDisplay.css";
import { EditView } from "./pages/EditView";
import { RecipeContextProvider } from "./shared/components/RecipeContextProvider";

function App() {
  return (
    <BrowserRouter>
      <RecipeContextProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<MainView />} />
              <Route path="/category/:categoryId" element={<CategoryView />} />
              <Route path="/recipe/:recipeId" element={<RecipeView />} />
              <Route path="/newRecipeForm/" element={<FormView />} />
              <Route path="/editRecipeForm/:recipeId" element={<EditView />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecipeContextProvider>
    </BrowserRouter>
  );
}

export default App;
