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
  width: 450px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const StyledGalleryImag = styled("img")`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  object-position: center;
  display: block;
`;
