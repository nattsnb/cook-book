import { styled } from "@mui/material";

export const StyledCategoryBodyContainer = styled("div")`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
`;
