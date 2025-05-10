import { styled } from "@mui/material";

export const StyledFormBody = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.secondary.main};
  box-shadow: inset 0px 8px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`,
);

export const TopMarginCentralContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacing(20)};
  ${theme.breakpoints.down("lg")} {
    margin-top: ${theme.spacing(15)};
  }
  ${theme.breakpoints.down("md")} {
    margin-top: ${theme.spacing(15)};
  }
  ${theme.breakpoints.down("sm")} {
    margin-top: ${theme.spacing(10)};
  }
`,
);
