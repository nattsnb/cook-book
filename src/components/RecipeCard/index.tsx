import { RecipeInfoBox } from "./RecipeInfoBox.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div>
      <RecipeInfoBox recipe={recipe} />
    </div>
  );
}
