import { Divider, styled, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export const StyledTypographyFooter = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.secondary.light};
  font-family: "Playfair Display", serif;

  ${theme.breakpoints.down("md")} {
    font-size: 14px;
  }

  ${theme.breakpoints.down("sm")} {
    font-size: 10px;
  }
`,
);

export const StyledFooterContainer = styled("div")(
  ({ theme }) => `
  padding: ${theme.spacing(5)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing(12)};
`,
);

export const StyledFooterDivider = styled(Divider)(
  ({ theme }) => `
  height: 1px;
  background-color: ${theme.palette.secondary.light};
  width: 80%;
  margin-bottom: ${theme.spacing(8)};
  margin-top: ${theme.spacing(3)};
`,
);

export const StyledCircleSmallIcon = styled(CircleIcon)(
  ({ theme }) => `
  font-size: 4px;
  color: ${theme.palette.secondary.light};
`,
);

export const StyledCircleLargeIcon = styled(CircleIcon)(
  ({ theme }) => `
  font-size: 6px;
  color: ${theme.palette.secondary.light};
  padding: 0 ${theme.spacing(2)};
`,
);

export const StyledDecorationContainer = styled("div")(
  ({ theme }) => `
  min-height: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing(3)};
`,
);
