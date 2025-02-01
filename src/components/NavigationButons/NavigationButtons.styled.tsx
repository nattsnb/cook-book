import { styled } from "@mui/material";

export const StyledLinkBarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
