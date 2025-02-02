import {
  StyledAllergensContainer,
  StyledAllergensTypography,
  StyledComponentContainer,
  StyledDotContainer,
  StyledRecipeCategoryTypography,
  StyledRecipeNameTypography,
  StyledRecipeNumberTypography,
  StyledThreeDotsContainer,
} from "./RecipeCard.styled.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { Ingredient } from "../../shared/types/Ingredient.ts";
import { Card } from "@mui/material";
import React, { forwardRef } from "react";
import { CATEGORIES } from "../../constans/categories.ts";

interface RecipeInfoBoxProps {
  recipe: Recipe;
}

export const InfoBox = forwardRef<HTMLDivElement, RecipeInfoBoxProps>(
  ({ recipe }, infoRef) => {
    const allergensIngredientsArray: Ingredient[] = recipe.ingredients.filter(
      (ingredient: Ingredient) => ingredient.isAllergen,
    );
    const allergensStringsArray: string[] = allergensIngredientsArray.map(
      (ingredient) => ingredient.name,
    );

    const category = CATEGORIES.find(
      (category) => category.id === Number(recipe.category),
    );

    const categoryName: string = category ? category.alt : "Unknown Category";

    return (
      <StyledComponentContainer>
        <Card
          variant="thinBorder"
          ref={infoRef as React.RefObject<HTMLDivElement>}
        >
          <StyledRecipeNumberTypography>
            Recipe No. {recipe.id}
          </StyledRecipeNumberTypography>
          <StyledRecipeNameTypography>
            {recipe.title}
          </StyledRecipeNameTypography>
          <StyledRecipeCategoryTypography>
            {categoryName}
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
      </StyledComponentContainer>
    );
  },
);
