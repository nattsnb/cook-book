import backButtonImage from "../../images/backButton.png";
import { StyledImg, StyledLeftSideContainer } from "./StyledButton.styled.tsx";
import { Link } from "@mui/material";

export function BackButton() {
  return (
    <StyledLeftSideContainer>
      <Link href="/">
        <StyledImg src={backButtonImage} />
      </Link>
    </StyledLeftSideContainer>
  );
}
