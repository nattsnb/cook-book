import { styled } from "@mui/material";
import addButtonImage from "../../images/addButton.png";

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
  flex-direction: column;
  align-items: center;
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

export const StyledTitleButtonImage = styled("img")(
  ({ theme }) => `
  background-image: url(${addButtonImage});
  background-size: cover;
  background-position: center;
  width: 540px;
  height: 190px;
  ${theme.breakpoints.down("md")} {
    width: 405px;
    height: 135px;
  }
  ${theme.breakpoints.down("sm")} {
    width: 324px;
    height: 108px;
  }
`,
);
