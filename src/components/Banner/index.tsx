import { Typography } from "@mui/material";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  StyledTitleContainer,
  StyledTypographyAboveH1,
} from "./Banner.styled.tsx";

export function Banner() {
  return (
    <PageWidthContainer>
      <StyledTitleContainer>
        <StyledTypographyAboveH1>The</StyledTypographyAboveH1>
        <Typography variant="h1">Cook Book</Typography>
      </StyledTitleContainer>
    </PageWidthContainer>
  );
}
