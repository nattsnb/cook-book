import { Divider, styled, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const StyledTypographyFooter = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.light};
  font-family: "Playfair Display", serif;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 14px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 10px;
  }
`;

export const StyledFooterContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFooterDivider = styled(Divider)`
  height: 1px;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  width: 80%;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
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

export const StyledDecorationContainer = styled("div")`
  min-height: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
