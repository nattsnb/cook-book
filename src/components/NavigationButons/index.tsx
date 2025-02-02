import { RefObject } from "react";
import {
  StyledLinkBarContainer,
  StyledButton,
} from "./NavigationButtons.styled.tsx";

interface NavigationButtonsProps {
  infoRef: RefObject<HTMLDivElement>;
  galleryRef: RefObject<HTMLDivElement>;
  ingredientsRef: RefObject<HTMLDivElement>;
  stepsRef: RefObject<HTMLDivElement>;
}

export function NavigationButtons({
  infoRef,
  galleryRef,
  ingredientsRef,
  stepsRef,
}: NavigationButtonsProps) {
  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      console.warn("Ref is null or undefined:", ref);
    }
  };

  return (
    <StyledLinkBarContainer>
      <StyledButton onClick={() => handleScroll(infoRef)}>Info</StyledButton>
      <StyledButton onClick={() => handleScroll(galleryRef)}>
        Gallery
      </StyledButton>
      <StyledButton onClick={() => handleScroll(ingredientsRef)}>
        Ingredients
      </StyledButton>
      <StyledButton onClick={() => handleScroll(stepsRef)}>
        Cooking steps
      </StyledButton>
    </StyledLinkBarContainer>
  );
}
