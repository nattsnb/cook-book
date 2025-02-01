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
import { Ingredient } from "../../shared/types/Ingredient.ts";

interface RecipeInfoBoxProps {
  recipe: Recipe;
}

export function RecipeInfoBox({ recipe }: RecipeInfoBoxProps) {
  const allergensIngredientsArray: Ingredient[] = recipe.ingredients.filter(
    (ingredient: Ingredient) => ingredient.isAllergen,
  );
  const allergensStringsArray: string[] = allergensIngredientsArray.map(
    (ingredient) => ingredient.name,
  );
  return (
    <StyledInfoBoxContainer>
      <StyledRecipeNumberTypography>
        Recipe No. {recipe.id}
      </StyledRecipeNumberTypography>
      <StyledRecipeNameTypography>{recipe.title}</StyledRecipeNameTypography>
      <StyledRecipeCategoryTypography>
        {recipe.category}
      </StyledRecipeCategoryTypography>
      <StyledAllergensContainer>
        <StyledAllergensTypography>
          {allergensStringsArray.join(", ")}
        </StyledAllergensTypography>
      </StyledAllergensContainer>
      <StyledThreeDotsContainer>
        <StyledDotContainer></StyledDotContainer>
        <StyledDotContainer></StyledDotContainer>
        <StyledDotContainer></StyledDotContainer>
      </StyledThreeDotsContainer>
    </StyledInfoBoxContainer>
  );
}
