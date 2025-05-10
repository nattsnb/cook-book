import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledButtonContainer,
  StyledCategoriesContainer,
  StyledCategoriesImageLink,
  StyledButtonLikeImageLink,
  StyledMainBody,
} from "./MainView.styled.tsx";
import addButton from "../../images/addButton.png";
import { CATEGORIES } from "../../constans/categories.ts";
import { RoutesPaths } from "../../shared/RoutesPaths.ts";

export function MainView() {
  return (
    <PageWidthContainer>
      <StyledMainBody>
        <StyledButtonContainer>
          <StyledButtonLikeImageLink
            alt="Add new recipe"
            href={RoutesPaths.NEW_RECIPE_FORM}
            src={addButton}
            className={"StyledFunctionButtonLikeImageLink"}
          />
          <StyledButtonLikeImageLink
            alt={CATEGORIES[0].alt}
            href={CATEGORIES[0].href}
            src={CATEGORIES[0].src}
            className={CATEGORIES[0].className}
          />
        </StyledButtonContainer>
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
      </StyledMainBody>
    </PageWidthContainer>
  );
}
