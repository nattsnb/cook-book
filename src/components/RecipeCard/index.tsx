import { RecipeInfoBox } from "./RecipeInfoBox.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { useRef } from "react";
import { NavigationButtons } from "../NavigationButons";
import { StyledRecipeBodyContainer } from "./RecipeCard.styled.tsx";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const infoRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  return (
    <StyledRecipeBodyContainer>
      <NavigationButtons
        infoRef={infoRef}
        galleryRef={galleryRef}
        ingredientsRef={ingredientsRef}
        stepsRef={stepsRef}
      />
      <RecipeInfoBox recipe={recipe} ref={infoRef} />
    </StyledRecipeBodyContainer>
  );
}
