import { Recipe } from "../../shared/types/Recipe.ts";
import React, { forwardRef } from "react";
import { Typography } from "@mui/material";
import { StyledEntryContainer, StyledDivider } from "./RecipeCard.styled.tsx";
import pluralize from "pluralize";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";
import { Ingredient } from "../../shared/types/Ingredient.ts";

interface IngredientsProps {
  recipe: Recipe;
}

export const Ingredients = forwardRef<HTMLDivElement, IngredientsProps>(
  ({ recipe }, ingredientsRef) => {
    let ingredientsToDisplay: string[] = [];

    const pushPrintableVersion = (ingredient: Ingredient) => {
      if (ingredient.unit === "each") {
        ingredientsToDisplay.push(
          pluralize(ingredient.name, Number(ingredient.amount), true),
        );
      } else {
        ingredientsToDisplay.push(
          `${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`,
        );
      }
    };

    recipe.ingredients.forEach(pushPrintableVersion);

    return (
      <ComponentContainer
        ref={ingredientsRef as React.RefObject<HTMLDivElement>}
      >
        <Typography variant="h3">Ingredients</Typography>
        <StyledDivider />
        {ingredientsToDisplay.map((ingredient, index) => (
          <StyledEntryContainer key={index}>
            {index + 1 + ". " + ingredient}
          </StyledEntryContainer>
        ))}
      </ComponentContainer>
    );
  },
);
