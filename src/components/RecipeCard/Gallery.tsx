import { Recipe } from "../../shared/types/Recipe.ts";
import React, { forwardRef } from "react";
import {
  StyledGalleryContainer,
  StyledGalleryImag,
} from "./RecipeCard.styled.tsx";

interface GalleryProps {
  recipe: Recipe;
}

export const Gallery = forwardRef<HTMLDivElement, GalleryProps>(
  ({ recipe }, galleryRef) => {
    return (
      <StyledGalleryContainer
        ref={galleryRef as React.RefObject<HTMLDivElement>}
      >
        <StyledGalleryImag src={recipe.photoURL} alt={"picture"} />
      </StyledGalleryContainer>
    );
  },
);
