import { Divider, styled, Typography } from "@mui/material";

export const StyledTypographyFooter = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledFooterContainer = styled("div")`
  padding: ${({ theme }) => theme.spacing(5)};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFooterDivider = styled(Divider)`
  height: 1px;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  width: 80%;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
