import { Recipe } from "../../shared/types/Recipe.ts";
import { useFieldArray, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { CATEGORIES } from "../../constans/categories.ts";
import {
  StyledFormLineContainer,
  StyledFormContainer,
  StyledNumberInput,
  StyledLabelAndNumberInputContainer,
  StyledStringInput,
  StyledLabelAndStringInputContainer,
  StyledLabelAndSelectContainer,
  StyledSelect,
  StyledDeleteButton,
  StyledForm,
  StyledFormLineWrapContainer,
  StyledDivider,
  StyledIngredientEntry,
  StyledAddButton,
  TopMarginCentralContainer,
  CentralContainer,
  StyledSubmitButton,
  StyledTextarea,
  StyledIdContainer,
  StyledLabel,
} from "./RecipeForm.styled.tsx";
import { useContext, useEffect } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../App.tsx";
import { Ingredient } from "../../shared/types/Ingredient.ts";
import { Step } from "../../shared/types/Step.ts";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";

const UNITS: string[] = ["ml", "l", "g", "kg", "tsp", "tbsp", "cup", "each"];

const RATING: number[] = Array.from({ length: 11 }, (_, i) => i * 0.5);

interface RecipeFormProps {
  recipeToEdit?: Recipe;
}

const initialValues: Recipe = {
  id: 0,
  category: null,
  title: "",
  photoURL: "",
  rating: null,
  numberOfPortions: null,
  cookingTimeInMinutes: null,
  ingredients: [
    {
      id: 0,
      amount: null,
      unit: "",
      name: "",
      isAllergen: null,
    },
  ],
  cookingSteps: [
    {
      id: 0,
      step: "",
    },
  ],
};

export function RecipeForm({ recipeToEdit }: RecipeFormProps) {
  const { savedRecipes, setSavedRecipes } =
    useContext<RecipeContextType>(RecipeContext);

  let defaultValues = null;
  let recipeId = 0;

  if (recipeToEdit) {
    defaultValues = recipeToEdit;
    recipeId = recipeToEdit.id;
  } else {
    const nextRecipeId = savedRecipes ? savedRecipes.length : 0;
    recipeId = nextRecipeId;
    initialValues.id = nextRecipeId;
    console.log(initialValues);
    defaultValues = initialValues;
  }

  // const defaultValues2 = recipeToEdit ?? initialValues

  const { register, handleSubmit, control, watch, reset } = useForm<Recipe>({
    defaultValues: recipeToEdit ?? initialValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray<Recipe, "ingredients", "id">({
    control,
    name: "ingredients",
  });

  const {
    fields: stepFields,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray<Recipe, "cookingSteps", "id">({
    control,
    name: "cookingSteps",
  });

  const ingredients: Ingredient[] = watch("ingredients");
  const cookingSteps: Step[] = watch("cookingSteps");

  const handleRecipeFormSubmit = (recipeFormData: Recipe) => {
    let newSavedRecipes: Recipe[] = [];
    const newRecipe: Recipe = createRecipeFromData(recipeFormData);
    if (Array.isArray(savedRecipes)) {
      if (recipeToEdit) {
        newSavedRecipes = [...savedRecipes];
        newSavedRecipes[recipeId] = newRecipe;
      } else {
        newSavedRecipes = [...savedRecipes, newRecipe];
      }
    }
    setSavedRecipes(newSavedRecipes);
    window.location.assign(`/recipe/${recipeId}`);
  };

  const createRecipeFromData = (data: Recipe) => {
    const newRecipe: Recipe = {
      id: recipeId,
      category: data.category,
      title: data.title,
      ingredients: data.ingredients.map((ingredient: any) => ({
        id: ingredient.id,
        amount: ingredient.amount,
        unit: ingredient.unit,
        name: ingredient.name,
        isAllergen: ingredient.isAllergen,
      })),
      cookingSteps: data.cookingSteps.map((step: any) => ({
        id: step.id,
        step: step.step,
      })),
      photoURL: data.photoURL,
      numberOfPortions: data.numberOfPortions,
      cookingTimeInMinutes: data.cookingTimeInMinutes,
      rating: data.rating,
    };
    return newRecipe;
  };

  let categoriesDropdownItems = CATEGORIES.slice(1).map((category) => (
    <option key={category.id} value={category.id}>
      {category.alt}
    </option>
  ));

  let unitsDropdownItems = UNITS.map((unit, index) => (
    <option key={index}>{unit}</option>
  ));

  let ratingDropdownItems = RATING.map((rate, index) => (
    <option key={index}>{rate}</option>
  ));

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(handleRecipeFormSubmit)}>
        <ComponentContainer>
          <StyledFormLineContainer>
            <StyledLabelAndNumberInputContainer>
              <StyledLabel>ID:</StyledLabel>
              <StyledIdContainer>{recipeId}</StyledIdContainer>
            </StyledLabelAndNumberInputContainer>
            <StyledLabelAndStringInputContainer>
              <StyledLabel>Tittle:</StyledLabel>
              <StyledStringInput {...register("title")} required />
            </StyledLabelAndStringInputContainer>
          </StyledFormLineContainer>
          <StyledFormLineContainer>
            <StyledLabelAndStringInputContainer>
              <StyledLabel>Photo URL:</StyledLabel>
              <StyledStringInput {...register("photoURL")} required />
            </StyledLabelAndStringInputContainer>
          </StyledFormLineContainer>
          <StyledFormLineContainer>
            <StyledLabelAndSelectContainer>
              <StyledLabel>Choose category:</StyledLabel>
              <StyledSelect {...register("category")} required>
                {categoriesDropdownItems}
              </StyledSelect>
            </StyledLabelAndSelectContainer>
          </StyledFormLineContainer>
          <StyledFormLineWrapContainer>
            <StyledLabelAndSelectContainer>
              <StyledLabel>Rating:</StyledLabel>
              <StyledSelect {...register("rating")}>
                {ratingDropdownItems}
              </StyledSelect>
            </StyledLabelAndSelectContainer>
            <StyledLabelAndNumberInputContainer>
              <StyledLabel>Portions:</StyledLabel>
              <StyledNumberInput
                type="number"
                {...register("numberOfPortions")}
                required
              />
            </StyledLabelAndNumberInputContainer>
            <StyledLabelAndNumberInputContainer>
              <StyledLabel>Cooking time:</StyledLabel>
              <StyledNumberInput
                type="number"
                {...register("cookingTimeInMinutes")}
                required
              />
            </StyledLabelAndNumberInputContainer>
            <StyledLabel>min</StyledLabel>
          </StyledFormLineWrapContainer>
        </ComponentContainer>
        <ComponentContainer>
          <Typography variant="h3">Ingredients</Typography>
          <StyledDivider />
          {ingredientFields.map((ingredientField, index) => {
            return (
              <div key={ingredientField.id}>
                <StyledIngredientEntry>
                  <StyledFormLineContainer>
                    <StyledLabelAndNumberInputContainer>
                      <StyledLabel>ID:</StyledLabel>
                      <StyledIdContainer>{index + 1}</StyledIdContainer>
                    </StyledLabelAndNumberInputContainer>
                    <StyledLabelAndStringInputContainer>
                      <StyledLabel>Name:</StyledLabel>
                      <StyledStringInput
                        {...register(`ingredients.${index}.name`)}
                        required
                      />
                    </StyledLabelAndStringInputContainer>
                  </StyledFormLineContainer>
                  <StyledFormLineWrapContainer>
                    <StyledLabelAndNumberInputContainer>
                      <StyledLabel>Amount:</StyledLabel>
                      <StyledNumberInput
                        {...register(`ingredients.${index}.amount`)}
                        required
                      />
                    </StyledLabelAndNumberInputContainer>
                    <StyledLabelAndSelectContainer>
                      <StyledLabel>Size:</StyledLabel>
                      <StyledSelect
                        {...register(`ingredients.${index}.unit`)}
                        required
                      >
                        {unitsDropdownItems}
                      </StyledSelect>
                    </StyledLabelAndSelectContainer>
                    <StyledLabelAndSelectContainer>
                      <StyledLabel>Is allergen:</StyledLabel>
                      <StyledSelect
                        {...register(`ingredients.${index}.isAllergen`)}
                        required
                      >
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </StyledSelect>
                    </StyledLabelAndSelectContainer>
                    <StyledDeleteButton
                      type="button"
                      onClick={() => removeIngredient(index)}
                    >
                      Delete
                    </StyledDeleteButton>
                  </StyledFormLineWrapContainer>
                </StyledIngredientEntry>
              </div>
            );
          })}
          <CentralContainer>
            <StyledAddButton
              type="button"
              onClick={() =>
                appendIngredient({
                  id: ingredients.length,
                  amount: null,
                  unit: "",
                  name: "",
                  isAllergen: null,
                })
              }
            >
              Add ingredient
            </StyledAddButton>
          </CentralContainer>
        </ComponentContainer>
        <ComponentContainer>
          <Typography variant="h3">Cooking steps</Typography>
          <StyledDivider />
          {stepFields.map((stepField, index) => {
            return (
              <div key={stepField.id}>
                <StyledFormLineContainer>
                  <StyledLabelAndNumberInputContainer>
                    <StyledLabel>ID:</StyledLabel>
                    <StyledIdContainer>{index + 1}</StyledIdContainer>
                  </StyledLabelAndNumberInputContainer>
                  <StyledLabelAndStringInputContainer>
                    <StyledLabel>Cooking step:</StyledLabel>
                    <StyledTextarea
                      rows={3}
                      cols={10}
                      {...register(`cookingSteps.${index}.step` as const)}
                      required
                    />
                  </StyledLabelAndStringInputContainer>
                  <StyledDeleteButton
                    type="button"
                    onClick={() => removeStep(index)}
                  >
                    Delete
                  </StyledDeleteButton>
                </StyledFormLineContainer>
              </div>
            );
          })}
          <TopMarginCentralContainer>
            <StyledAddButton
              type="button"
              onClick={() => appendStep({ id: cookingSteps.length, step: "" })}
            >
              Add step
            </StyledAddButton>
          </TopMarginCentralContainer>
        </ComponentContainer>
        <TopMarginCentralContainer>
          <StyledSubmitButton type="submit">
            <img />
          </StyledSubmitButton>
        </TopMarginCentralContainer>
      </StyledForm>
    </StyledFormContainer>
  );
}
