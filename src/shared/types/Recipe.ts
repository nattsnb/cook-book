import { Ingredient } from "./Ingredient";
import { Step } from "./Step.ts";

export interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  cookingSteps: Step[];
  photoURL: string;
  numberOfPortions: number;
  cookingTimeInMinutes: number;
  rating: number;
}
