import { styled } from "@mui/material";
import { ButtonLikeImageLink } from "../../shared/components/ButtonLikeImageLink.tsx";
import CircleIcon from "@mui/icons-material/Circle";

export const StyledCategoryBodyContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  background-color: ${theme.palette.secondary.main};
  width: 100%;
`,
);

export const StyledCategoriesContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing(15)};
  background-color: ${theme.palette.background.default};
  height: 100%;
  min-height: 1200px;

  ${theme.breakpoints.down("lg")} {
    min-height: 1000px;
    padding: ${theme.spacing(10)};
  }
  ${theme.breakpoints.down("md")} {
    min-height: 800px;
    padding: ${theme.spacing(5)};
  }
  ${theme.breakpoints.down("sm")} {
    min-height: 600px;
  }
`,
);

export const StyledCategoriesImageLink = styled(ButtonLikeImageLink)(
  ({ theme }) => `
  display: inline-block;
  max-width: 170px;
  ${theme.breakpoints.down("lg")} {
    max-width: 150px;
  }
  ${theme.breakpoints.down("md")} {
    max-width: 120px;
  }
  ${theme.breakpoints.down("sm")} {
    max-width: 80px;
  }
`,
);

export const StyledCategoryContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledTitleContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacing(12)};

  ${theme.breakpoints.down("lg")} {
    margin-top: ${theme.spacing(10)};
  }
  ${theme.breakpoints.down("md")} {
    margin-top: ${theme.spacing(8)};
  }
  ${theme.breakpoints.down("sm")} {
    margin-top: ${theme.spacing(5)};
  }
`,
);

export const StyledRecipesContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding-left: ${theme.spacing(25)};

  ${theme.breakpoints.down("lg")} {
    padding-left: ${theme.spacing(20)};
  }
  ${theme.breakpoints.down("md")} {
    padding-left: ${theme.spacing(15)};
  }
  ${theme.breakpoints.down("sm")} {
    padding-left: ${theme.spacing(10)};
  }
`,
);

export const StyledCircleSmallIcon = styled(CircleIcon)(
  ({ theme }) => `
  font-size: 6px;
  color: ${theme.palette.primary.dark};
`,
);

export const StyledCircleLargeIcon = styled(CircleIcon)(
  ({ theme }) => `
  font-size: 8px;
  color: ${theme.palette.primary.dark};
  padding: 0 ${theme.spacing(2)};
`,
);

export const StyledRecipeLinkContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  margin-top: ${theme.spacing(12)};
  font-size: 32px;
  text-transform: capitalize;

  ${theme.breakpoints.down("lg")} {
    margin-top: ${theme.spacing(10)};
    font-size: 28px;
  }
  ${theme.breakpoints.down("md")} {
    margin-top: ${theme.spacing(8)};
    font-size: 24px;
  }
  ${theme.breakpoints.down("sm")} {
    margin-top: ${theme.spacing(5)};
    font-size: 22px;
  }
`,
);
