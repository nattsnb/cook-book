import { Ingredient } from "./Ingredient";
import { Step } from "./step.ts";

export interface Recipe {
  title: string;
  ingredients: Ingredient[];
  cookingSteps: Step[];
  photoURL: string;
  numberOfPortions: number;
  cookingTimeInMinutes: number;
  rating: number;
}
