import { styled } from "@mui/material";

export const StyledRecipeBody = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.secondary.main};
  box-shadow: inset 0px 8px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`,
);
