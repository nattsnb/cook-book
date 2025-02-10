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
import { getRecipeToDisplayFromParams } from "../../shared/getRecipeToDisplayFromParams.tsx";

export function EditView() {
  const recipeToDisplay = getRecipeToDisplayFromParams();

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
