import { RecipeForm } from "../../components/RecipeForm";
import {
  TopMarginCentralContainer,
  StyledFormBody,
  StyledTitleButtonImage,
} from "./FormView.styled.tsx";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";

export function FormView() {
  return (
    <PageWidthContainer>
      <StyledFormBody>
        <TopMarginCentralContainer>
          <StyledTitleButtonImage />
        </TopMarginCentralContainer>
        <RecipeForm />
      </StyledFormBody>
    </PageWidthContainer>
  );
}
