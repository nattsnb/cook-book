import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledTypographyFooter,
  StyledFooterContainer,
  StyledFooterDivider,
} from "./Footer.styled.tsx";

export function Footer() {
  return (
    <PageWidthContainer>
      <StyledFooterContainer>
        <StyledFooterDivider />
        <StyledTypographyFooter>
          All rights reserved 2025
        </StyledTypographyFooter>
      </StyledFooterContainer>
    </PageWidthContainer>
  );
}
