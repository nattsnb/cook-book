import { Recipe } from "../../shared/types/Recipe.ts";
import {
  StyledGalleryContainer,
  StyledGalleryImag,
} from "./RecipeCard.styled.tsx";

interface GalleryProps {
  recipe: Recipe;
}

export const Gallery = ({ recipe }: GalleryProps) => {
  return (
    <StyledGalleryContainer id="galleryDiv">
      <StyledGalleryImag src={recipe.photoURL} alt={"picture"} />
    </StyledGalleryContainer>
  );
};
