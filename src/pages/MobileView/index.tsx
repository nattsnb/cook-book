import { RecipesList } from "../../components/RecipesList";
import { useContext } from "react";
import { EntryForm } from "../../components/EntryForm";
import { RecipeCard } from "../../components/RecipeCard";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import {RecipeContext} from "../../App.tsx";

export function MobileView() {
  const {
    activeRecipeId
  } = useContext<RecipeContextType>(RecipeContext)
  return (
    <div>
      <RecipesList />
      {activeRecipeId ? <RecipeCard /> : <EntryForm />}
    </div>
  );
}
