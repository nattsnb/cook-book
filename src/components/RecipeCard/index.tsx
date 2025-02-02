import { InfoBox } from "./infoBox.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { useRef } from "react";
import { NavigationButtons } from "../NavigationButons";
import { StyledBodyContainer } from "./RecipeCard.styled.tsx";
import { Gallery } from "./Gallery.tsx";
import { useMediaQuery } from "@mui/material";
import theme from "../../shared/utils/theme.ts";
import { Ingredients } from "./Ingredients.tsx";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const infoRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledBodyContainer>
      {isViewportSmallerThanMd && (
        <NavigationButtons
          infoRef={infoRef}
          galleryRef={galleryRef}
          ingredientsRef={ingredientsRef}
          stepsRef={stepsRef}
        />
      )}
      <InfoBox recipe={recipe} ref={infoRef} />
      <Gallery recipe={recipe} ref={galleryRef} />
      <Ingredients recipe={recipe} ref={ingredientsRef} />
    </StyledBodyContainer>
  );
}
