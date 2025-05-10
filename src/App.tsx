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
import { RoutesPaths } from "./shared/RoutesPaths.ts";

function App() {
  return (
    <BrowserRouter>
      <RecipeContextProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path={RoutesPaths.MAIN} element={<MainView />} />
              <Route path={RoutesPaths.CATEGORY} element={<CategoryView />} />
              <Route path={RoutesPaths.RECIPE} element={<RecipeView />} />
              <Route
                path={RoutesPaths.NEW_RECIPE_FORM}
                element={<FormView />}
              />
              <Route path={RoutesPaths.EDIT_RECIPE} element={<EditView />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecipeContextProvider>
    </BrowserRouter>
  );
}

export default App;
