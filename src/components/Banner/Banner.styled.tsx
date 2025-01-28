import { styled, Typography } from "@mui/material";

export const StyledTypographyAboveH1 = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-size: 40px;
  font-weight: bold;
  font-family: "Playfair Display", serif;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 30px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 20px;
  }
`;

export const StyledTitleContainer = styled("div")`
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;
