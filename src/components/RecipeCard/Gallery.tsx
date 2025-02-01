import { Recipe } from "../../shared/types/Recipe.ts";
import React, { forwardRef } from "react";
import { Card } from "@mui/material";
import {
  StyledComponentContainer,
  StyledGalleryImag,
} from "./RecipeCard.styled.tsx";

interface GalleryProps {
  recipe: Recipe;
}

export const Gallery = forwardRef<HTMLDivElement, GalleryProps>(
  ({ recipe }, galleryRef) => {
    return (
      <StyledComponentContainer>
        <Card
          variant={"thickBorder"}
          ref={galleryRef as React.RefObject<HTMLDivElement>}
        >
          <StyledGalleryImag src={recipe.photoURL} alt={"picture"} />
        </Card>
      </StyledComponentContainer>
    );
  },
);
