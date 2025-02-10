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
import { RecipeContext } from "../../shared/components/RecipeContextProvider";
import { useParams } from "react-router-dom";
import { Recipe } from "../../shared/types/Recipe.ts";

type ParamsInterface = {
  categoryId: string;
};

export function CategoryView() {
  const { savedRecipes } = useContext<RecipeContextType>(RecipeContext);
  const params = useParams<ParamsInterface>();
  let categoryId = null;
  let recipesToDisplay: Recipe[] = [];

  if (params.categoryId) {
    categoryId = Number(params.categoryId);
  }

  // use memo do ogarniania ifow
  // const recipeToDisplay2 = useMemo(() =>
  //   categoryId === 0
  //     ? savedRecipes
  //     : savedRecipes?.filter(
  //       (recipe) => Number(recipe.category) === categoryId,
  // ), [])

  const activeCategory = CATEGORIES?.find(
    (category) => category.id === categoryId,
  ) || { alt: "No category found" };

  if (categoryId === 0 && savedRecipes) {
    recipesToDisplay = savedRecipes;
  } else if (savedRecipes) {
    recipesToDisplay = savedRecipes?.filter(
      (recipe) => Number(recipe.category) === categoryId,
    );
  }

  recipesToDisplay = [...recipesToDisplay].sort((a: Recipe, b: Recipe) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
  );

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
