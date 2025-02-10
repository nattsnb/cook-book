import { Units } from "../Units.ts";

export interface Ingredient {
  id: number;
  amount: number | null;
  unit: Units | null;
  name: string;
  isAllergen: boolean | null;
}
