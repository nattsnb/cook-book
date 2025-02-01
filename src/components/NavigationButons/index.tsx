import { Button } from "@mui/material";
import { RefObject } from "react";
import { StyledLinkBarContainer } from "./NavigationButtons.styled.tsx";

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
      <Button onClick={() => handleScroll(infoRef)}>Info</Button>
      <Button onClick={() => handleScroll(galleryRef)}>Gallery</Button>
      <Button onClick={() => handleScroll(ingredientsRef)}>Ingredients</Button>
      <Button onClick={() => handleScroll(stepsRef)}>Cooking steps</Button>
    </StyledLinkBarContainer>
  );
}
