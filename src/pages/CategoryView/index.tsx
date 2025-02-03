import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledCategoryBodyContainer,
  StyledCategoriesContainer,
  StyledCategoriesImageLink,
  StyledRecipesContainer,
  StyledCategoryContentContainer,
  StyledTitleContainer,
  StyledCircleSmallIcon,
  StyledCircleLargeIcon,
  StyledRecipeLinkContainer,
} from "./CategoryView.styled.tsx";
import { CATEGORIES } from "../../constans/categories.ts";
import { Link, Typography } from "@mui/material";
import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../App.tsx";
import { useParams } from "react-router-dom";
import { Recipe } from "../../shared/types/Recipe.ts";

type ParamsInterface = {
  categoryId: string;
};

export function CategoryView() {
  const { savedRecipes } = useContext<RecipeContextType>(RecipeContext);
  const params = useParams<ParamsInterface>();
  let categoryId = null;
  if (params.categoryId) {
    categoryId = Number(params.categoryId);
  }
  const activeCategory = CATEGORIES?.find(
    (category) => category.id === categoryId,
  ) || { alt: "No category found" };

  let recipesToDisplay: Recipe[] = [];
  if (savedRecipes) {
    recipesToDisplay = savedRecipes?.filter(
      (recipe) => Number(recipe.category) === categoryId,
    );
    recipesToDisplay.sort((a: Recipe, b: Recipe) => {
      if (a.title.slice(1) < b.title.slice(1)) {
        return -1;
      }
      if (a.title.slice(1) > b.title.slice(1)) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <PageWidthContainer>
      <StyledCategoryBodyContainer>
        <StyledCategoriesContainer>
          {CATEGORIES.slice(1).map((category) => (
            <StyledCategoriesImageLink
              key={category.id}
              alt={category.alt}
              href={category.href}
              src={category.src}
              className={category.className}
            />
          ))}
        </StyledCategoriesContainer>
        <StyledCategoryContentContainer>
          <StyledTitleContainer>
            <StyledCircleSmallIcon />
            <StyledCircleLargeIcon />
            <Typography variant="h2">{activeCategory.alt}</Typography>
            <StyledCircleLargeIcon />
            <StyledCircleSmallIcon />
          </StyledTitleContainer>
          <StyledRecipesContainer>
            {recipesToDisplay.map((recipe, index) => {
              return (
                <StyledRecipeLinkContainer key={index}>
                  <Link href={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                </StyledRecipeLinkContainer>
              );
            })}
          </StyledRecipesContainer>
        </StyledCategoryContentContainer>
      </StyledCategoryBodyContainer>
    </PageWidthContainer>
  );
}
