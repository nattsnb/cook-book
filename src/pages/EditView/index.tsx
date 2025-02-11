import { RecipeForm } from "../../components/RecipeForm";
import {
  StyledFormBody,
  TopMarginCentralContainer,
} from "./EditView.styled.tsx";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledCircleLargeIcon,
  StyledCircleSmallIcon,
} from "../CategoryView/CategoryView.styled.tsx";
import { Typography } from "@mui/material";
import { getRecipeToDisplayFromParams } from "../../shared/getRecipeToDisplayFromParams.ts";
import { Recipe } from "../../shared/types/Recipe.ts";
import { createRecipeFromData } from "../../shared/createRecipeFromData.ts";
import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../shared/components/RecipeContextProvider";

export function EditView() {
  const recipeToEdit = getRecipeToDisplayFromParams();

  const { savedRecipes, setSavedRecipes } =
    useContext<RecipeContextType>(RecipeContext);

  const handleRecipeFormSubmit = (recipeFormData: Recipe) => {
    let newSavedRecipes: Recipe[] = [];
    const newRecipe: Recipe = createRecipeFromData(recipeFormData);
    if (Array.isArray(savedRecipes)) {
      const indexOfExistingRecipe = savedRecipes.findIndex(
        (recipe) => recipe.id === newRecipe.id,
      );
      newSavedRecipes = [...savedRecipes];
      newSavedRecipes[indexOfExistingRecipe] = newRecipe;
    }
    setSavedRecipes(newSavedRecipes);
    window.location.assign(`/recipe/${newRecipe.id}`);
  };

  return (
    <PageWidthContainer>
      <StyledFormBody>
        <TopMarginCentralContainer>
          <StyledCircleSmallIcon />
          <StyledCircleLargeIcon />
          <Typography variant="h2">Editing recipe</Typography>
          <StyledCircleLargeIcon />
          <StyledCircleSmallIcon />
        </TopMarginCentralContainer>
        <RecipeForm
          initialRecipe={recipeToEdit}
          handleRecipeFormSubmit={handleRecipeFormSubmit}
        />
      </StyledFormBody>
    </PageWidthContainer>
  );
}
