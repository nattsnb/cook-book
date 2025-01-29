import { RecipeForm } from "../../components/RecipeForm";
import { StyledFormBody } from "./FormView.styled.tsx";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";

export function FormView() {
  return (
    <PageWidthContainer>
      <StyledFormBody>
        <RecipeForm />
      </StyledFormBody>
    </PageWidthContainer>
  );
}
