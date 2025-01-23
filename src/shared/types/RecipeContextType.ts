export interface RecipeContextType {
  activeRecipeId?: number | null;
  setActiveRecipeId?: (activeRecipe: number | null) => void;
  isEditModeOn?: boolean;
  setIsEditModeOn?: (isEditModeOn: boolean) => void;
}
