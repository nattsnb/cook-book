import { styled } from "@mui/material";
import { ButtonLikeImageLink } from "../../shared/components/ButtonLikeImageLink.tsx";

export const StyledMainBody = styled("div")(
  ({ theme }) => `
  background-color: ${theme.palette.secondary.main};
  box-shadow: inset 0px 8px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`,
);

export const StyledButtonContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: ${theme.spacing(10)};

  ${theme.breakpoints.down("lg")} {
    padding: ${theme.spacing(5)};
  }

  ${theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: center;
    min-height: 220px;
    justify-content: space-between;
  }
`,
);

export const StyledButtonLikeImageLink = styled(ButtonLikeImageLink)(
  ({ theme }) => `
  display: inline-block;

  width: 360px;

  ${theme.breakpoints.down("xl")} {
    width: 350px;
  }

  ${theme.breakpoints.down("lg")} {
    width: 300px;
  }

  ${theme.breakpoints.down("md")} {
    width: 350px;
  }

  ${theme.breakpoints.down("sm")} {
    width: 280px;
  }
`,
);

export const StyledCategoriesContainer = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(5)};

  ${theme.breakpoints.down("lg")} {
    padding: ${theme.spacing(5)};
  }
`,
);

export const StyledCategoriesImageLink = styled(ButtonLikeImageLink)(
  ({ theme }) => `
  display: inline-block;
  max-width: 250px;
  ${theme.breakpoints.down("sm")} {
    max-width: 200px;
  }
`,
);
