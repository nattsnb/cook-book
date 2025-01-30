import { styled } from "@mui/material";

export const StyledImg = styled("img")`
  width: 200px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 180px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 150px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 130px;
  }
`;

export const StyledLeftSideContainer = styled("div")`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
`;
