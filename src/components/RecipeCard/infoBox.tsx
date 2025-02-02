import {
  StyledAllergensContainer,
  StyledAllergensTypography,
  StyledComponentContainer,
  StyledCircularButton,
  StyledInfoBoxWrapper,
  StyledSmallDivider,
  StyledCircularButtonsContainer,
  StyledRowOfCircularButtonsContainer,
  CircularButtonLabel,
  ButtonAndLabelContainer,
  LinkContentContainer,
  StyledCircleSmallIcon,
} from "./RecipeCard.styled.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { Ingredient } from "../../shared/types/Ingredient.ts";
import React, { forwardRef } from "react";
import { CATEGORIES } from "../../constans/categories.ts";
import { Link, Typography } from "@mui/material";

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
      <StyledComponentContainer
        ref={infoRef as React.RefObject<HTMLDivElement>}
      >
        <StyledInfoBoxWrapper>
          <Link>
            <LinkContentContainer>
              <StyledCircleSmallIcon />
              <p>Edit</p>
              <StyledCircleSmallIcon />
            </LinkContentContainer>
          </Link>
          <Typography variant="h4">Recipe No. {recipe.id}</Typography>
          <StyledSmallDivider />
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
      </StyledComponentContainer>
    );
  },
);
