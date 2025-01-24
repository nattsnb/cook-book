import { RecipesList } from "../../components/RecipesList";
import { useContext } from "react";
import { EntryForm } from "../../components/RecipeForm";
import { RecipeCard } from "../../components/RecipeCard";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../App.tsx";

export function DesktopView() {
  const { activeRecipeId } = useContext<RecipeContextType>(RecipeContext);
  return (
    <div>
      <RecipesList />
      {activeRecipeId ? <RecipeCard /> : <EntryForm />}
    </div>
  );
}
