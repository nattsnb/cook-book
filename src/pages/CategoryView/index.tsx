import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import { StyledCategoryBodyContainer } from "./CategoryView.styled.tsx";
import { CategoriesList } from "../../components/CategoriesList";
import { CategoryContent } from "../../components/CategoryContent";

export function CategoryView() {
  return (
    <PageWidthContainer>
      <StyledCategoryBodyContainer>
        <CategoriesList />
        <CategoryContent />
      </StyledCategoryBodyContainer>
    </PageWidthContainer>
  );
}
