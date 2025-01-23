import { useContext } from "react";
import { IsEditModeOnContext } from "../../App.tsx";
import { EntryForm } from "../EntryForm";
import { RecipeDetails } from "../RecipeDetails";
import { IsEditModeOnContextType } from "../../shared/types/IsEditModeOnContextType.ts";

export function RecipeCard() {
  const isEditeModeOn: IsEditModeOnContextType =
    useContext(IsEditModeOnContext);
  return <div>{isEditeModeOn ? <EntryForm /> : <RecipeDetails />}</div>;
}
