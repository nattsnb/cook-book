import { Link, Typography } from "@mui/material";
import { PageWidthContainer } from "../../shared/components/PageWidthContainer.tsx";
import {
  LinkContentContainer,
  StyledTitleContainer,
  StyledTypographyAboveH1,
} from "./Banner.styled.tsx";
import {
  StyledCircleLargeIcon,
  StyledCircleSmallIcon,
  StyledFooterDivider,
} from "../Footer/Footer.styled.tsx";
import { useLocation } from "react-router-dom";
import { RoutesPaths } from "../../shared/RoutesPaths.ts";

export function Banner() {
  const location = useLocation();

  return (
    <PageWidthContainer>
      <StyledTitleContainer>
        <StyledTypographyAboveH1>The</StyledTypographyAboveH1>
        <Typography variant="h1">Cook Book</Typography>
        {location.pathname !== RoutesPaths.MAIN && (
          <Link href={RoutesPaths.MAIN}>
            <LinkContentContainer>
              <StyledCircleSmallIcon />
              <StyledCircleLargeIcon />
              <p>Main</p>
              <StyledCircleLargeIcon />
              <StyledCircleSmallIcon />
            </LinkContentContainer>
          </Link>
        )}
      </StyledTitleContainer>
      <StyledFooterDivider />
    </PageWidthContainer>
  );
}
