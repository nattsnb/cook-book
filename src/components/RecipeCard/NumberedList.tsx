import { Typography } from "@mui/material";
import { StyledEntryContainer, StyledDivider } from "./RecipeCard.styled.tsx";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";
import { v4 as uuidv4 } from "uuid";

interface NumberedListProps {
  dataToDisplay: string[];
  title: string;
}

export const NumberedList = ({ dataToDisplay, title }: NumberedListProps) => (
  <ComponentContainer id="stepsDiv">
    <Typography variant="h3">{title}</Typography>
    <StyledDivider />
    {dataToDisplay.map((rowOfData, index) => (
      <StyledEntryContainer key={uuidv4()}>
        {index + 1 + ". " + rowOfData}
      </StyledEntryContainer>
    ))}
  </ComponentContainer>
);
