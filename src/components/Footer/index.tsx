import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledTypographyFooter,
  StyledFooterContainer,
  StyledFooterDivider,
  StyledCircleSmallIcon,
  StyledCircleLargeIcon,
  StyledDecorationContainer,
} from "./Footer.styled.tsx";

export function Footer() {
  return (
    <PageWidthContainer>
      <StyledFooterContainer>
        <StyledFooterDivider />
        <StyledDecorationContainer>
          <StyledCircleSmallIcon />
          <StyledCircleLargeIcon />
          <StyledCircleSmallIcon />
        </StyledDecorationContainer>
        <StyledTypographyFooter>
          All rights reserved 2025
        </StyledTypographyFooter>
      </StyledFooterContainer>
    </PageWidthContainer>
  );
}
