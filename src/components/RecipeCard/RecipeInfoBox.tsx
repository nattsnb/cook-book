import {
  StyledAllergensContainer,
  StyledAllergensTypography,
  StyledDotContainer,
  StyledRecipeCategoryTypography,
  StyledRecipeNameTypography,
  StyledRecipeNumberTypography,
  StyledThreeDotsContainer,
} from "./RecipeCard.styled.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { Ingredient } from "../../shared/types/Ingredient.ts";
import { Card } from "@mui/material";
import { forwardRef } from "react";

interface RecipeInfoBoxProps {
  recipe: Recipe;
}

export const RecipeInfoBox = forwardRef<HTMLDivElement, RecipeInfoBoxProps>(
  ({ recipe }, infoRef) => {
    const allergensIngredientsArray: Ingredient[] = recipe.ingredients.filter(
      (ingredient: Ingredient) => ingredient.isAllergen,
    );
    const allergensStringsArray: string[] = allergensIngredientsArray.map(
      (ingredient) => ingredient.name,
    );
    return (
      <Card
        variant="thinBorder"
        ref={infoRef as React.RefObject<HTMLDivElement>}
      >
        <StyledRecipeNumberTypography>
          Recipe No. {recipe.id + 1}
        </StyledRecipeNumberTypography>
        <StyledRecipeNameTypography>{recipe.title}</StyledRecipeNameTypography>
        <StyledRecipeCategoryTypography>
          {recipe.category}
        </StyledRecipeCategoryTypography>
        <StyledAllergensContainer>
          <StyledAllergensTypography>
            allergens: {allergensStringsArray.join(", ")}
          </StyledAllergensTypography>
        </StyledAllergensContainer>
        <StyledThreeDotsContainer>
          <StyledDotContainer></StyledDotContainer>
          <StyledDotContainer></StyledDotContainer>
          <StyledDotContainer></StyledDotContainer>
        </StyledThreeDotsContainer>
      </Card>
    );
  },
);
