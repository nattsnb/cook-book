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
import { useContext, useMemo } from "react";
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

  const categoryId = useMemo(
    () => (params.categoryId ? Number(params.categoryId) : null),
    [params],
  );

  const activeCategory = useMemo(
    () =>
      CATEGORIES?.find((category) => category.id === categoryId) || {
        alt: "No category found",
      },
    [categoryId],
  );

  const recipesToDisplay = useMemo(() => {
    if (!savedRecipes) return [];
    const filteredRecipes =
      categoryId === 0
        ? savedRecipes
        : savedRecipes?.filter(
            (recipe) => Number(recipe.category) === categoryId,
          );
    return [...filteredRecipes].sort((a: Recipe, b: Recipe) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
    );
  }, [categoryId, savedRecipes]);

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
            <Typography variant="h2">
              {activeCategory.alt ?? "No active category"}
            </Typography>
            <StyledCircleLargeIcon />
            <StyledCircleSmallIcon />
          </StyledTitleContainer>
          <StyledRecipesContainer>
            {recipesToDisplay.map((recipe, index) => (
              <StyledRecipeLinkContainer key={index}>
                <Link href={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </StyledRecipeLinkContainer>
            ))}
          </StyledRecipesContainer>
        </StyledCategoryContentContainer>
      </StyledCategoryBodyContainer>
    </PageWidthContainer>
  );
}
