import { styled } from "@mui/material";

export const StyledFormBody = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: inset 0px 8px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`;

export const TopMarginCentralContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
