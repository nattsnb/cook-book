import { Ingredient } from "./Ingredient";
import { Step } from "./Step.ts";

export interface Recipe {
  id: number;
  category: number | null;
  title: string;
  ingredients: Ingredient[];
  cookingSteps: Step[];
  photoURL: string;
  numberOfPortions: number | null;
  cookingTimeInMinutes: number | null;
  rating: number | null;
}
