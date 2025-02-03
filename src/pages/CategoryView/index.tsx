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
} from "./CategoryView.styled.tsx";
import { CATEGORIES } from "../../constans/categories.ts";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../App.tsx";
import { useParams } from "react-router-dom";

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

  // NAPRAWIC TA FUNKCJE
  // const recipesToDisplay: Recipe[] = savedRecipes?.filter((recipe) => recipe.category === categoryId) || [];
  console.log(savedRecipes);

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
          <StyledRecipesContainer></StyledRecipesContainer>
        </StyledCategoryContentContainer>
      </StyledCategoryBodyContainer>
    </PageWidthContainer>
  );
}
