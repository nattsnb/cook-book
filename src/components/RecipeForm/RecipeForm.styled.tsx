import { styled } from "@mui/material";

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
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};

  button {
    font-family: "Playfair Display", serif;
    height: 35px;
  }

  label {
    font-family: "Playfair Display", serif;
    font-size: 14px;
  }

  input,
  select,
  textarea {
    height: 25px;
    padding: ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(2)};
    border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
    border-radius: 4px;
    margin-left: ${({ theme }) => theme.spacing(2)};
    margin-right: ${({ theme }) => theme.spacing(1)};
  }

  textarea {
    white-space: pre;
    overflow-wrap: normal;
    overflow-x: scroll;
  }
`;

export const StyledNumberInput = styled("input")`
  min-width: 45px;
  max-width: 60px;
  flex-grow: 1;
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
  max-width: 200px;
  min-height: 54px;
`;

export const StyledStringInput = styled("input")`
  width: 100%;
  min-width: 120px;
`;

export const StyledSelect = styled("select")`
  min-width: 35px;
  max-width: 200px;
  flex-grow: 1;
`;

export const StyledDeleteButton = styled("button")`
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const StyledForm = styled("form")`
  max-width: 100%;
`;
