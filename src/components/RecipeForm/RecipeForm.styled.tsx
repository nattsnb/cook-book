import { styled } from "@mui/material";

export const StyledFormLineContainer = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const StyledFormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};

  button {
    font-family: "Playfair Display", serif;
  }

  label {
    font-family: "Playfair Display", serif;
    font-size: 14px;
  }

  input,
  select {
    height: 25px;
    padding: ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1)}
      ${({ theme }) => theme.spacing(2)};
    border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
    border-radius: 4px;
    margin-left: ${({ theme }) => theme.spacing(2)};
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`;

export const StyledNumberInput = styled("input")`
  max-width: 35px;
`;

export const StyledLabelAndInputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
