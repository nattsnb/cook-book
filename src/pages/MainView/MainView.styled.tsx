import { styled } from "@mui/material";
import kitchenImage from "../../images/banner.png";
import { ButtonLikeImageLink } from "../../components/ButtonLikeImageLink";

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
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: inset 0px 8px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`;

export const StyledButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing(10)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: ${({ theme }) => theme.spacing(5)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: center;
    min-height: 220px;
    justify-content: space-between;
  }
`;

export const StyledButtonLikeImageLink = styled(ButtonLikeImageLink)`
  display: inline-block;

  max-width: 360px;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 350px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    max-width: 300px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 350px;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 280px;
  }
`;

export const StyledCategoriesContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: ${({ theme }) => theme.spacing(5)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
  }
`;

export const StyledCategoriesImageLink = styled(ButtonLikeImageLink)`
  display: inline-block;
  max-width: 250px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 200px;
  }
`;
