import { Recipe } from "../../shared/types/Recipe.ts";
import React, { forwardRef } from "react";
import { Typography } from "@mui/material";
import { StyledEntryContainer, StyledDivider } from "./RecipeCard.styled.tsx";
import pluralize from "pluralize";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";

interface IngredientsProps {
  recipe: Recipe;
}

export const Ingredients = forwardRef<HTMLDivElement, IngredientsProps>(
  ({ recipe }, ingredientsRef) => {
    let ingredientsToDisplay: string[] = [];

    recipe.ingredients.map((ingredient) => {
      if (ingredient.unit === "each") {
        ingredientsToDisplay.push(
          pluralize(ingredient.name, Number(ingredient.amount), true),
        );
      } else {
        ingredientsToDisplay.push(
          `${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`,
        );
      }
    });
    return (
      <ComponentContainer
        ref={ingredientsRef as React.RefObject<HTMLDivElement>}
      >
        <Typography variant="h3">Ingredients</Typography>
        <StyledDivider />
        {ingredientsToDisplay.map((ingredient, index) => {
          return (
            <StyledEntryContainer key={index}>
              {index + 1 + ". " + ingredient}
            </StyledEntryContainer>
          );
        })}
      </ComponentContainer>
    );
  },
);
