import theme from "./shared/utils/theme.ts";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { Layout } from "./components/Layout";
import { MobileView } from "./pages/MobileView";
import { DesktopView } from "./pages/DesktopView";
import { createContext, useState } from "react";
import { RecipeContextType } from "./shared/types/RecipeContextType.ts";

export const RecipeContext = createContext<RecipeContextType>({});

function App() {
  const [activeRecipeId, setActiveRecipeId] = useState<number | null>(null);
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(true);

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <RecipeContext.Provider value={{ activeRecipeId, setActiveRecipeId, isEditModeOn, setIsEditModeOn }}>
      <ThemeProvider theme={theme}>
        <Layout>
          {isViewportSmallerThanMd ? <MobileView /> : <DesktopView />}
        </Layout>
      </ThemeProvider>
    </RecipeContext.Provider>
  );
}

export default App;
