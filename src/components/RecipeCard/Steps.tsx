import { Recipe } from "../../shared/types/Recipe.ts";
import { Typography } from "@mui/material";
import { StyledEntryContainer, StyledDivider } from "./RecipeCard.styled.tsx";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";

interface StepsProps {
  recipe: Recipe;
}

export const Steps = ({ recipe }: StepsProps) => (
  <ComponentContainer id="stepsDiv">
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
