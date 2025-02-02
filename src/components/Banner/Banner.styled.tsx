import { styled, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const StyledTypographyAboveH1 = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.light};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: "Playfair Display", serif;

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

export const LinkContentContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "Playfair Display", serif;
  color: ${({ theme }) => theme.palette.secondary.light};
  font-size: 20px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 18px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;

export const StyledCircleSmallIcon = styled(CircleIcon)`
  font-size: 4px;
  color: ${({ theme }) => theme.palette.secondary.light};
`;

export const StyledCircleLargeIcon = styled(CircleIcon)`
  font-size: 6px;
  color: ${({ theme }) => theme.palette.secondary.light};
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;
