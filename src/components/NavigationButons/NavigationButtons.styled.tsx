import { styled } from "@mui/material";

export const StyledLinkBarContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  background-color: ${theme.palette.primary.main};
  position: fixed;
  bottom: 0;
`,
);

export const StyledButton = styled("button")(
  ({ theme }) => `
  width: 100%;
  background-color: initial;
  background-image: linear-gradient(
    180deg,
    ${theme.palette.primary.main},
    ${theme.palette.primary.dark}
  );
  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px;
  border: 0;
  ${theme.breakpoints.down("sm")} {
    width: 100%;
  }
`,
);

export const StyledLink = styled("a")(
  ({ theme }) => ` 
  text-decoration: none;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  color: ${theme.palette.secondary.light};
  ${theme.breakpoints.down("sm")} {
    font-size: 15px;
  }
`,
);
