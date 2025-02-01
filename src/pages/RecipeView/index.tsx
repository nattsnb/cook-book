import { useParams } from "react-router-dom";
import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../App.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { RecipeCard } from "../../components/RecipeCard";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import { StyledRecipeBody } from "./RecipeView.styled.tsx";

type ParamsInterface = {
  recipeId: string;
};

export function RecipeView() {
  const { savedRecipes } = useContext<RecipeContextType>(RecipeContext);
  const params = useParams<ParamsInterface>();
  let recipeId = null;
  if (params.recipeId) {
    recipeId = Number(params.recipeId.slice(1));
  }
  const recipeToDisplay: Recipe = savedRecipes?.find(
    (recipe: Recipe) => recipe.id === recipeId,
  );

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
