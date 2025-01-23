import { useContext } from "react";
import { EntryForm } from "../RecipeForm";
import { RecipeDetails } from "../RecipeDetails";
import {RecipeContextType} from "../../shared/types/RecipeContextType.ts";
import {RecipeContext} from "../../App.tsx";

export function RecipeCard() {
  const {
    isEditModeOn
  } = useContext<RecipeContextType>(RecipeContext)
  return <div>{isEditModeOn ? <EntryForm /> : <RecipeDetails />}</div>;
}
