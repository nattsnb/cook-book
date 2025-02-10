import { styled, Typography } from "@mui/material";

export const StyledTypographyAboveH1 = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.secondary.light};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  font-family: "Playfair Display", serif;

  ${theme.breakpoints.down("md")} {
    font-size: 30px;
  }

  ${theme.breakpoints.down("sm")} {
    font-size: 20px;
  }
`,
);

export const StyledTitleContainer = styled("div")(
  ({ theme }) => `
  padding-bottom: ${theme.spacing(4)};
`,
);

export const LinkContentContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "Playfair Display", serif;
  color: ${theme.palette.secondary.light};
  font-size: 20px;
  ${theme.breakpoints.down("md")} {
    font-size: 18px;
  }
  ${theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`,
);
