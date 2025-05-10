import {
  StyledAllergensContainer,
  StyledAllergensTypography,
  StyledCircularButton,
  StyledInfoBoxWrapper,
  StyledCircularButtonsContainer,
  StyledRowOfCircularButtonsContainer,
  CircularButtonLabel,
  ButtonAndLabelContainer,
  LinkContentContainer,
  StyledCircleSmallIcon,
} from "./RecipeCard.styled.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { Ingredient } from "../../shared/types/Ingredient.ts";
import { CATEGORIES } from "../../constans/categories.ts";
import { Link, Typography } from "@mui/material";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";

interface RecipeInfoBoxProps {
  recipe: Recipe;
}

export const InfoBox = ({ recipe }: RecipeInfoBoxProps) => {
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
    <ComponentContainer id="infoDiv">
      <StyledInfoBoxWrapper>
        <Link href={`/edit-recipe-form/${recipe.id}`}>
          <LinkContentContainer>
            <StyledCircleSmallIcon />
            <p>Edit</p>
            <StyledCircleSmallIcon />
          </LinkContentContainer>
        </Link>
        <Typography variant="h2">{recipe.title}</Typography>
        <Typography variant="h3">{categoryName}</Typography>
        <StyledAllergensContainer>
          <StyledAllergensTypography>
            allergens: {allergensStringsArray.join(", ")}
          </StyledAllergensTypography>
        </StyledAllergensContainer>
      </StyledInfoBoxWrapper>
      <StyledRowOfCircularButtonsContainer>
        <StyledCircularButtonsContainer>
          <ButtonAndLabelContainer>
            <CircularButtonLabel>Portions: </CircularButtonLabel>
            <StyledCircularButton>
              {recipe.numberOfPortions}
            </StyledCircularButton>
          </ButtonAndLabelContainer>
          <ButtonAndLabelContainer>
            <CircularButtonLabel>Cooking time: </CircularButtonLabel>
            <StyledCircularButton>
              {recipe.cookingTimeInMinutes}
            </StyledCircularButton>
          </ButtonAndLabelContainer>
          <ButtonAndLabelContainer>
            <CircularButtonLabel>Rating: </CircularButtonLabel>
            <StyledCircularButton>{recipe.rating}</StyledCircularButton>
          </ButtonAndLabelContainer>
        </StyledCircularButtonsContainer>
      </StyledRowOfCircularButtonsContainer>
    </ComponentContainer>
  );
};
