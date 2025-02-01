import {
  StyledAllergensContainer,
  StyledAllergensTypography,
  StyledDotContainer,
  StyledInfoBoxContainer,
  StyledRecipeCategoryTypography,
  StyledRecipeNameTypography,
  StyledRecipeNumberTypography,
  StyledThreeDotsContainer,
} from "./RecipeCard.styled.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";

interface RecipeInfoBoxProps {
  recipe: Recipe;
}

export function RecipeInfoBox({ recipe }: RecipeInfoBoxProps) {
  return (
    <StyledInfoBoxContainer>
      <StyledRecipeNumberTypography>{recipe.id}</StyledRecipeNumberTypography>
      <StyledRecipeNameTypography>{recipe.title}</StyledRecipeNameTypography>
      <StyledRecipeCategoryTypography>{recipe.category}</StyledRecipeCategoryTypography>
      <StyledAllergensContainer>
        <StyledAllergensTypography></StyledAllergensTypography>
      </StyledAllergensContainer>
      <StyledThreeDotsContainer>
        <StyledDotContainer></StyledDotContainer>
        <StyledDotContainer></StyledDotContainer>
        <StyledDotContainer></StyledDotContainer>
      </StyledThreeDotsContainer>
    </StyledInfoBoxContainer>
  );
}
