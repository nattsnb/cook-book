import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../App.tsx";

export function RecipeView() {
  const { activeRecipeId } = useContext<RecipeContextType>(RecipeContext);
  return (
    <div>
      <p>recipe {activeRecipeId} placeholder</p>
    </div>
  );
}
