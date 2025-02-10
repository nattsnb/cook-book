import { InfoBox } from "./InfoBox.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
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
  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledBodyContainer>
      {isViewportSmallerThanMd ? (
        <RecipeCardContainer>
          <NarrowViewContainer>
            <InfoBox recipe={recipe} />
            <Gallery recipe={recipe} />
            <Ingredients recipe={recipe} />
            <Steps recipe={recipe} />
          </NarrowViewContainer>
          <NavigationButtons />
        </RecipeCardContainer>
      ) : (
        <RecipeCardContainer>
          <RowOfWideViewContainer>
            <InfoBox recipe={recipe} />
            <Gallery recipe={recipe} />
          </RowOfWideViewContainer>
          <RowOfWideViewContainer>
            <Ingredients recipe={recipe} />
            <Steps recipe={recipe} />
          </RowOfWideViewContainer>
        </RecipeCardContainer>
      )}
    </StyledBodyContainer>
  );
}
