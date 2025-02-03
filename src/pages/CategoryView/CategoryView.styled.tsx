import { styled } from "@mui/material";
import { ButtonLikeImageLink } from "../../shared/components/ButtonLikeImageLink.tsx";
import CircleIcon from "@mui/icons-material/Circle";

export const StyledCategoryBodyContainer = styled("div")`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
`;

export const StyledCategoriesContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(15)};
  background-color: ${({ theme }) => theme.palette.background.default};
  height: 100%;
  min-height: 1200px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    min-height: 1000px;
    padding: ${({ theme }) => theme.spacing(10)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    min-height: 800px;
    padding: ${({ theme }) => theme.spacing(5)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-height: 600px;
  }
`;

export const StyledCategoriesImageLink = styled(ButtonLikeImageLink)`
  display: inline-block;
  max-width: 170px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    max-width: 150px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 120px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 80px;
  }
`;

export const StyledCategoryContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledTitleContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(12)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-top: ${({ theme }) => theme.spacing(10)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: ${({ theme }) => theme.spacing(5)};
  }
`;

export const StyledRecipesContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.spacing(25)};

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding-left: ${({ theme }) => theme.spacing(20)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-left: ${({ theme }) => theme.spacing(15)};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-left: ${({ theme }) => theme.spacing(10)};
  }
`;

export const StyledCircleSmallIcon = styled(CircleIcon)`
  font-size: 6px;
  color: ${({ theme }) => theme.palette.primary.dark};
`;

export const StyledCircleLargeIcon = styled(CircleIcon)`
  font-size: 8px;
  color: ${({ theme }) => theme.palette.primary.dark};
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;

export const StyledRecipeLinkContainer = styled("div")`
  display: flex;
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacing(12)};
  font-size: 32px;
  text-transform: capitalize;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin-top: ${({ theme }) => theme.spacing(10)};
    font-size: 28px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: ${({ theme }) => theme.spacing(8)};
    font-size: 24px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: ${({ theme }) => theme.spacing(5)};
    font-size: 22px;
  }
`;
