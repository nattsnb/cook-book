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
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../shared/components/RecipeContextProvider";
import { Recipe } from "../../shared/types/Recipe.ts";

type ParamsInterface = {
  recipeId: string;
};

export function EditView() {
  const { savedRecipes } = useContext<RecipeContextType>(RecipeContext);
  const params = useParams<ParamsInterface>();
  let recipeId = null;
  if (params.recipeId) {
    recipeId = Number(params.recipeId);
  }
  const recipeToDisplay = savedRecipes?.find(
    (recipe: Recipe) => recipe.id === recipeId,
  );

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
        <RecipeForm recipeToEdit={recipeToDisplay} />
      </StyledFormBody>
    </PageWidthContainer>
  );
}
