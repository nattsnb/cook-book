import { styled } from "@mui/material";

export const StyledLinkBarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  position: fixed;
  bottom: 0;
`;

export const StyledButton = styled("button")`
  font-family: "Playfair Display", serif;
  font-size: 20px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 15px;
    width: 100%;
  }
  background-color: initial;
  background-image: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.primary.main},
    ${({ theme }) => theme.palette.primary.dark}
  );
  box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px;
  color: ${({ theme }) => theme.palette.secondary.light};
  border: 0;
`;
