import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledButtonContainer,
  StyledCategoriesContainer,
  StyledCategoriesImageLink,
  StyledButtonLikeImageLink,
  StyledKitchenPictureContainer,
  StyledMainBody,
} from "./MainView.styled.tsx";
import addButton from "../../images/addButton.png";
import { CATEGORY_BUTTONS } from "../../constans/categoryButtons.ts";

export function MainView() {
  return (
    <PageWidthContainer>
      <StyledKitchenPictureContainer />
      <StyledMainBody>
        <StyledButtonContainer>
          <StyledButtonLikeImageLink
            alt="Add new recipe"
            href="/newRecipeForm/"
            src={addButton}
            className={"StyledFunctionButtonLikeImageLink"}
          />
          <StyledButtonLikeImageLink
            alt={CATEGORY_BUTTONS[0].alt}
            href={CATEGORY_BUTTONS[0].href}
            src={CATEGORY_BUTTONS[0].src}
            className={CATEGORY_BUTTONS[0].className}
          />
        </StyledButtonContainer>
        <StyledCategoriesContainer>
          {CATEGORY_BUTTONS.slice(1).map((categoryButton) => (
            <StyledCategoriesImageLink
              key={categoryButton.id}
              alt={categoryButton.alt}
              href={categoryButton.href}
              src={categoryButton.src}
              className={categoryButton.className}
            />
          ))}
        </StyledCategoriesContainer>
      </StyledMainBody>
    </PageWidthContainer>
  );
}
