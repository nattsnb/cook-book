import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledButtonContainer,
  StyledButtonLikeImageLink,
  StyledKitchenPictureContainer,
  StyledMainBody,
} from "./MainView.styled.tsx";
import addButton from "../../images/addButton.png";
import browseButton from "../../images/browseButton.png";

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
            className={"StyledButtonLikeImageLink"}
          />
          <StyledButtonLikeImageLink
            alt="Browse all recipes"
            href="/category/:category0"
            src={browseButton}
            className={"StyledButtonLikeImageLink"}
          />
        </StyledButtonContainer>
      </StyledMainBody>
    </PageWidthContainer>
  );
}
