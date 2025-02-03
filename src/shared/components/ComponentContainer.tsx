import { styled } from "@mui/material";

export const ComponentContainer = styled("div")`
  width: 100%;
  height: inherit;
  padding: ${({ theme }) => theme.spacing(2)};
  box-sizing: border-box;
  border: 3px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  margin: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(10)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: ${({ theme }) => theme.spacing(2)} 0;
    padding: ${({ theme }) => theme.spacing(7)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`;
