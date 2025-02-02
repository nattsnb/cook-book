import { styled, Typography } from "@mui/material";

export const StyledRecipeNumberTypography = styled(Typography)`
  font-family: "Playfair Display", serif;
  font-size: 16px;
`;
export const StyledRecipeNameTypography = styled(Typography)`
  font-family: "Playfair Display", serif;
  font-size: 40px;
`;
export const StyledRecipeCategoryTypography = styled(Typography)`
  font-family: "Playfair Display", serif;
  font-size: 30px;
`;
export const StyledAllergensTypography = styled(Typography)`
  font-family: "Playfair Display", serif;
  font-size: 16px;
`;

export const StyledAllergensContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;
export const StyledThreeDotsContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;
export const StyledDotContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledBodyContainer = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledComponentContainer = styled("div")`
  width: 100%;
  height: inherit;
  padding: ${({ theme }) => theme.spacing(2)};
  box-sizing: border-box;
  border: 3px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  margin: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }
`;

export const StyledGalleryContainer = styled("div")`
  width: 100%;
  height: inherit;
  padding: 0;
  box-sizing: border-box;
  border: 6px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  margin: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: ${({ theme }) => theme.spacing(2)} 0;
  }
`;

export const StyledGalleryImag = styled("img")`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const StyledIngredientContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
  font-family: "Playfair Display", serif;
  font-size: 30px;
`;

export const NarrowViewContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;

export const RecipeCardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RowOfWideViewContainer = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
