import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledKitchenPictureContainer,
  StyledMainBody,
} from "./MainView.styled.tsx";

export function MainView() {
  return (
    <PageWidthContainer>
      <StyledKitchenPictureContainer />
      <StyledMainBody>
        <p>main view placeholder</p>
      </StyledMainBody>
    </PageWidthContainer>
  );
}
