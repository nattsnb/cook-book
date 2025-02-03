import { InfoBox } from "./InfoBox.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { useRef } from "react";
import { NavigationButtons } from "../NavigationButons";
import {
  NarrowViewContainer,
  RowOfWideViewContainer,
  StyledBodyContainer,
  RecipeCardContainer,
} from "./RecipeCard.styled.tsx";
import { Gallery } from "./Gallery.tsx";
import { useMediaQuery } from "@mui/material";
import theme from "../../shared/utils/theme.ts";
import { Ingredients } from "./Ingredients.tsx";
import { Steps } from "./Steps.tsx";

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
      {isViewportSmallerThanMd ? (
        <RecipeCardContainer>
          <NarrowViewContainer>
            <InfoBox recipe={recipe} ref={infoRef} />
            <Gallery recipe={recipe} ref={galleryRef} />
            <Ingredients recipe={recipe} ref={ingredientsRef} />
            <Steps recipe={recipe} ref={stepsRef} />
          </NarrowViewContainer>
          <NavigationButtons
            infoRef={infoRef}
            galleryRef={galleryRef}
            ingredientsRef={ingredientsRef}
            stepsRef={stepsRef}
          />
        </RecipeCardContainer>
      ) : (
        <RecipeCardContainer>
          <RowOfWideViewContainer>
            <InfoBox recipe={recipe} ref={infoRef} />
            <Gallery recipe={recipe} ref={galleryRef} />
          </RowOfWideViewContainer>
          <RowOfWideViewContainer>
            <Ingredients recipe={recipe} ref={ingredientsRef} />
            <Steps recipe={recipe} ref={stepsRef} />
          </RowOfWideViewContainer>
        </RecipeCardContainer>
      )}
    </StyledBodyContainer>
  );
}
