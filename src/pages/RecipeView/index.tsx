import { RecipeCard } from "../../components/RecipeCard";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import { StyledRecipeBody } from "./RecipeView.styled.tsx";
import { getRecipeToDisplayFromParams } from "../../shared/getRecipeToDisplayFromParams.tsx";

export function RecipeView() {
  const recipeToDisplay = getRecipeToDisplayFromParams();

  return (
    <PageWidthContainer>
      <StyledRecipeBody>
        {recipeToDisplay ? (
          <RecipeCard recipe={recipeToDisplay} />
        ) : (
          <p>No recipe with this ID in database</p>
        )}
      </StyledRecipeBody>
    </PageWidthContainer>
  );
}
