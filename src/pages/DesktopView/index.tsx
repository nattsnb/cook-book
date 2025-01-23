import { RecipesList } from "../../components/RecipesList";
import { useContext } from "react";
import { ActiveRecipeContext } from "../../App.tsx";
import { EntryForm } from "../../components/EntryForm";
import { RecipeCard } from "../../components/RecipeCard";
import { ActiveRecipeContextType } from "../../shared/types/ActiveRecipeContextType.ts";

export function DesktopView() {
  const activeRecipe: ActiveRecipeContextType | null =
    useContext(ActiveRecipeContext);
  return (
    <div>
      <RecipesList />
      {activeRecipe ? <RecipeCard /> : <EntryForm />}
    </div>
  );
}
