import { styled } from "@mui/material";

export const StyledLinkBarContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 250px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  max-width: 60px;
`;
