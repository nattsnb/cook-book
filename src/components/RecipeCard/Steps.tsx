import { Recipe } from "../../shared/types/Recipe.ts";
import React, { forwardRef } from "react";
import { Typography } from "@mui/material";
import { StyledEntryContainer, StyledDivider } from "./RecipeCard.styled.tsx";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";

interface StepsProps {
  recipe: Recipe;
}

export const Steps = forwardRef<HTMLDivElement, StepsProps>(
  ({ recipe }, stepsRef) => {
    return (
      <ComponentContainer ref={stepsRef as React.RefObject<HTMLDivElement>}>
        <Typography variant="h3">Cooking steps</Typography>
        <StyledDivider />
        {recipe.cookingSteps.map((step, index) => {
          return (
            <StyledEntryContainer key={index}>
              {index + 1 + ". " + step.step}
            </StyledEntryContainer>
          );
        })}
      </ComponentContainer>
    );
  },
);
