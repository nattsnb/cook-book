import { styled } from "@mui/material";

export const StyledFormBody = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  box-shadow: inset 0px 8px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`;
