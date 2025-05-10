import {
  StyledLinkBarContainer,
  StyledButton,
  StyledLink,
} from "./NavigationButtons.styled.tsx";

export function NavigationButtons() {
  return (
    <StyledLinkBarContainer>
      <StyledButton>
        <StyledLink href="#infoDiv">Info</StyledLink>
      </StyledButton>
      <StyledButton>
        <StyledLink href="#galleryDiv">Gallery</StyledLink>
      </StyledButton>
      <StyledButton>
        <StyledLink href="#ingredientsDiv">Ingredients</StyledLink>
      </StyledButton>
      <StyledButton>
        <StyledLink href="#stepsDiv">Cooking steps</StyledLink>
      </StyledButton>
    </StyledLinkBarContainer>
  );
}
