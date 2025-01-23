import theme from "./shared/utils/theme.ts";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { Layout } from "./components/Layout";
import { MobileView } from "./pages/MobileView";
import { DesktopView } from "./pages/DesktopView";
import { createContext, useState } from "react";
import { ActiveRecipeContextType } from "./shared/types/ActiveRecipeContextType.ts";
import { IsEditModeOnContextType } from "./shared/types/IsEditModeOnContextType.ts";

export const ActiveRecipeContext =
  createContext<ActiveRecipeContextType | null>(null);
export const IsEditModeOnContext = createContext<IsEditModeOnContextType>({
  isEditModeOn: true,
});

function App() {
  const [activeRecipe, setActiveRecipe] = useState<ActiveRecipeContextType>({
    activeRecipeId: null,
  });
  const [isEditeModeOn, setIsEditeModeOn] = useState<IsEditModeOnContextType>({
    isEditModeOn: true,
  });

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));


  console.log(setActiveRecipe, setIsEditeModeOn);

  return (
    <ActiveRecipeContext.Provider value={activeRecipe}>
      <IsEditModeOnContext.Provider value={isEditeModeOn}>
        <ThemeProvider theme={theme}>
          <Layout>
            {isViewportSmallerThanMd ? <MobileView /> : <DesktopView />}
          </Layout>
        </ThemeProvider>
      </IsEditModeOnContext.Provider>
    </ActiveRecipeContext.Provider>
  );
}

export default App;
