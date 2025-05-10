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
import { NumberedList } from "./NumberedList.tsx";
import { Units } from "../../shared/Units.ts";
import pluralize from "pluralize";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));
  const cookingStepsStringsArray = recipe.cookingSteps.map((step) => step.step);

  const produceIngredientsStringsArray = () => {
    return recipe.ingredients.map((ingredient) => {
      if (ingredient.unit === Units.EACH) {
        return pluralize(ingredient.name, Number(ingredient.amount), true);
      } else {
        return `${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`;
      }
    });
  };

  const ingredientsStringsArray = produceIngredientsStringsArray();

  return (
    <StyledBodyContainer>
      {isViewportSmallerThanMd ? (
        <RecipeCardContainer>
          <NarrowViewContainer>
            <InfoBox recipe={recipe} />
            <Gallery recipe={recipe} />
            <NumberedList
              dataToDisplay={ingredientsStringsArray}
              title={"Ingredients"}
            />
            <NumberedList
              dataToDisplay={cookingStepsStringsArray}
              title={"Cooking Steps"}
            />
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
            <NumberedList
              dataToDisplay={ingredientsStringsArray}
              title={"Ingredients"}
            />
            <NumberedList
              dataToDisplay={cookingStepsStringsArray}
              title={"Cooking Steps"}
            />
          </RowOfWideViewContainer>
        </RecipeCardContainer>
      )}
    </StyledBodyContainer>
  );
}
