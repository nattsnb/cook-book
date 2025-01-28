import { styled } from "@mui/material";
import kitchenImage from "../../images/banner.png";

export const StyledKitchenPictureContainer = styled("div")`
  background-image: url(${kitchenImage});
  width: 100%;
  height: 486px;
  background-size: cover;
  background-position: top;
  box-shadow: 0px -20px 80px #171511;

  ${({ theme }) => theme.breakpoints.down("md")} {
    background-size: 786px 364px;
    height: 364px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    background-size: 409px 194px;
    height: 194px;
  }
`;

export const StyledMainBody = styled("div")`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  box-shadow: inset 0px 8px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`;
