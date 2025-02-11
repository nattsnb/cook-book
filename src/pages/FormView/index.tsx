import { RecipeForm } from "../../components/RecipeForm";
import {
  TopMarginCentralContainer,
  StyledFormBody,
  StyledTitleButtonImage,
} from "./FormView.styled.tsx";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../shared/components/RecipeContextProvider";
import { Recipe } from "../../shared/types/Recipe.ts";
import { createRecipeFromData } from "../../shared/createRecipeFromData.ts";

export function FormView() {
  const { savedRecipes, setSavedRecipes } =
    useContext<RecipeContextType>(RecipeContext);

  const handleRecipeFormSubmit = (recipeFormData: Recipe) => {
    let newSavedRecipes: Recipe[] = [];
    const newRecipe: Recipe = createRecipeFromData(recipeFormData);
    if (Array.isArray(savedRecipes)) {
      newSavedRecipes = [...savedRecipes, newRecipe];
    } else {
      newSavedRecipes = [newRecipe];
    }
    setSavedRecipes(newSavedRecipes);
    if (newRecipe.id) {
      window.location.assign(`/recipe/${newRecipe.id}`);
    }
  };

  return (
    <PageWidthContainer>
      <StyledFormBody>
        <TopMarginCentralContainer>
          <StyledTitleButtonImage />
        </TopMarginCentralContainer>
        <RecipeForm handleRecipeFormSubmit={handleRecipeFormSubmit} />
      </StyledFormBody>
    </PageWidthContainer>
  );
}
