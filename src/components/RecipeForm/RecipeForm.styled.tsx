import { Divider, styled } from "@mui/material";
import addButtonImage from "../../images/addButton.png";
import submitButtonImage from "../../images/submitButton.png";

export const StyledFormLineContainer = styled("div")`
  max-width: 95%;
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};
  align-items: flex-end;
  flex-wrap: nowrap;
`;

export const StyledFormLineWrapContainer = styled("div")`
  max-width: 95%;
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const StyledFormContainer = styled("div")`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(8)};
  margin: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(14)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: ${({ theme }) => theme.spacing(12)}
      ${({ theme }) => theme.spacing(6)};
    margin: ${({ theme }) => theme.spacing(12)}
      ${({ theme }) => theme.spacing(10)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(4)};
    margin: ${({ theme }) => theme.spacing(10)}
      ${({ theme }) => theme.spacing(8)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(8)}
      ${({ theme }) => theme.spacing(2)};
    margin: ${({ theme }) => theme.spacing(8)}
      ${({ theme }) => theme.spacing(4)};
  }

  button {
    font-family: "Playfair Display", serif;
    font-size: 24px;
    min-height: 72px;
    ${({ theme }) => theme.breakpoints.down("lg")} {
      font-size: 20px;
      min-height: 54px;
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: 18px;
      min-height: 40px;
    }
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 14px;
      min-height: 36px;
    }
  }

  label {
    font-family: "Playfair Display", serif;
    font-size: 24px;

    ${({ theme }) => theme.breakpoints.down("lg")} {
      font-size: 20px;
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: 18px;
    }
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 14px;
    }
  }

  input,
  select,
  textarea {
    font-size: 28px;
    height: 50px;
    padding: ${({ theme }) => theme.spacing(4)}
      ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(4)};
    border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
    border-radius: 4px;
    margin-left: ${({ theme }) => theme.spacing(5)};
    margin-right: ${({ theme }) => theme.spacing(4)};

    ${({ theme }) => theme.breakpoints.down("lg")} {
      font-size: 24px;
      height: 40px;
      padding: ${({ theme }) => theme.spacing(3)}
        ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(0)}
        ${({ theme }) => theme.spacing(3)};
      margin-left: ${({ theme }) => theme.spacing(4)};
      margin-right: ${({ theme }) => theme.spacing(3)};
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: 16px;
      height: 30px;
      padding: ${({ theme }) => theme.spacing(2)}
        ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(0)}
        ${({ theme }) => theme.spacing(2)};
      margin-left: ${({ theme }) => theme.spacing(3)};
      margin-right: ${({ theme }) => theme.spacing(2)};
    }
    ${({ theme }) => theme.breakpoints.down("sm")} {
      font-size: 14px;
      height: 25px;
      margin-left: ${({ theme }) => theme.spacing(2)};
      margin-right: ${({ theme }) => theme.spacing(1)};
    }
  }

  textarea {
    white-space: pre;
    overflow-wrap: normal;
    overflow-x: scroll;
  }
`;

export const StyledNumberInput = styled("input")`
  width: 80px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 70px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 60px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 50px;
  }
`;

export const StyledLabelAndStringInputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledLabelAndNumberInputContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledLabelAndSelectContainer = styled("div")`
  display: flex;
  flex-direction: column;
  min-width: 90px;
  min-height: 104px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    min-height: 81px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: 64px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-height: 54px;
  }
`;

export const StyledStringInput = styled("input")`
  width: 100%;
  min-width: 120px;
`;

export const StyledSelect = styled("select")`
  min-width: 35px;
  max-width: 200px;
  min-height: 72px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    min-height: 54px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: 40px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-height: 35px;
  }
`;

export const StyledDeleteButton = styled("button")`
  margin-left: ${({ theme }) => theme.spacing(2)};

  width: 105px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 90px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 75px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 60px;
  }
}
`;

export const StyledForm = styled("form")`
  max-width: 100%;
`;

export const StyledDivider = styled(Divider)`
  height: 4px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(12)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
    height: 3px;
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 2px;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 1px;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const StyledIngredientEntry = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(20)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const StyledAddButton = styled("button")`
  width: 280px;
  color: ${({ theme }) => theme.palette.secondary.contrastText};
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  border-radius: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 240px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 200px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 160px;
  }
}
`;

export const TopMarginCentralContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(20)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-top: ${({ theme }) => theme.spacing(15)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: ${({ theme }) => theme.spacing(15)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: ${({ theme }) => theme.spacing(10)};
  }
`;

export const BottomMarginCentralContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(20)};
  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: ${({ theme }) => theme.spacing(15)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const CentralContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitleButtonImage = styled("img")`
  background-image: url(${addButtonImage});

  background-size: cover;
  background-position: center;
  width: 540px;
  height: 190px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 405px;
    height: 135px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 324px;
    height: 108px;
  }
`;

export const StyledSubmitButton = styled("button")`
  border: none;
  background-image: url(${submitButtonImage});
  background-size: cover;
  background-position: center;

  width: 540px;
  height: 190px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 405px;
    height: 135px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 324px;
    height: 108px;
  }
`;
