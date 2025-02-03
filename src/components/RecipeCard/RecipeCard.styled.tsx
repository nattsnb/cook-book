import { Button, Divider, styled, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const StyledAllergensTypography = styled(Typography)`
  font-family: "Playfair Display", serif;
  font-size: 16px;
  color: darkred;
  margin-top: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 14px;
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
  }
`;

export const StyledAllergensContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;
export const StyledCircularButtonsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
`;
export const StyledRowOfCircularButtonsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(12)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;
export const StyledCircularButton = styled(Button)`
  padding: 30px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.palette.secondary.main},
    ${({ theme }) => theme.palette.primary.light}
  );
  border-radius: 100%;
  width: 100px;
  height: 100px;
  box-shadow: 1 -1px -1px 5px 3px rgba(0, 0, 0);
  font-size: 30px;
  font-family: "Arial", sans-serif;
  color: ${({ theme }) => theme.palette.primary.dark};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 80px;
    height: 80px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100px;
    height: 100px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 80px;
    height: 80px;
  }
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
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

export const StyledEntryContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(2)};
  font-family: "Playfair Display", serif;
  font-size: 22px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 20px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
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

export const StyledDivider = styled(Divider)`
  height: 2px;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 1px;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;

export const StyledSmallDivider = styled(Divider)`
  height: 1px;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  width: 100px;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 80px;
    margin-top: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 60px;
    margin-top: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 40px;
    margin-top: ${({ theme }) => theme.spacing(1)};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;

export const StyledInfoBoxWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonAndLabelContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircularButtonLabel = styled("div")`
  font-family: "Playfair Display", serif;
  font-size: 18px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 16px;
  }
`;

export const LinkContentContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-height: 15px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  font-family: "Playfair Display", serif;
  color: ${({ theme }) => theme.palette.primary.dark};
  font-size: 16px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 14px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
  }
`;

export const StyledCircleSmallIcon = styled(CircleIcon)`
  font-size: 4px;
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;
