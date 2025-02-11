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
  StyledIdInput,
} from "./RecipeForm.styled.tsx";
import { Ingredient } from "../../shared/types/Ingredient.ts";
import { Step } from "../../shared/types/Step.ts";
import { ComponentContainer } from "../../shared/components/ComponentContainer.tsx";
import { Units } from "../../shared/Units.ts";
import { initialValues } from "../../constans/initialValues.ts";
import { useContext, useEffect, useMemo } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../shared/components/RecipeContextProvider";

const unitValues = Object.values(Units);

const RATING: number[] = Array.from({ length: 11 }, (_, i) => i * 0.5);

interface RecipeFormProps {
  initialRecipe?: Recipe;
  handleRecipeFormSubmit: (recipe: Recipe) => void;
}

export function RecipeForm({
  initialRecipe,
  handleRecipeFormSubmit,
}: RecipeFormProps) {
  const { savedRecipes } = useContext<RecipeContextType>(RecipeContext);
  const { register, handleSubmit, control, watch, setValue, reset } =
    useForm<Recipe>({
      defaultValues: initialRecipe ?? initialValues,
    });

  const recipeId = useMemo(() => {
    const recipeCount = savedRecipes ? savedRecipes.length : 0;
    return initialRecipe?.id ?? recipeCount + 1;
  }, [savedRecipes]);

  useEffect(() => {
    setValue("id", recipeId);
    if (initialRecipe) {
      reset(initialRecipe);
    }
  }, [initialRecipe, reset, recipeId]);

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

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(handleRecipeFormSubmit)}>
        <ComponentContainer>
          <StyledFormLineContainer>
            <StyledLabelAndNumberInputContainer>
              <StyledLabel>ID:</StyledLabel>
              <StyledIdInput {...register("id")} value={recipeId} readOnly />
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
                {CATEGORIES.slice(1).map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.alt}
                  </option>
                ))}
              </StyledSelect>
            </StyledLabelAndSelectContainer>
          </StyledFormLineContainer>
          <StyledFormLineWrapContainer>
            <StyledLabelAndSelectContainer>
              <StyledLabel>Rating:</StyledLabel>
              <StyledSelect {...register("rating")}>
                {RATING.map((rate, index) => (
                  <option key={index}>{rate}</option>
                ))}
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
          {ingredientFields.map((ingredientField, index) => (
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
                      {unitValues.map((unit, index) => (
                        <option key={index}>{unit}</option>
                      ))}
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
          ))}
          <CentralContainer>
            <StyledAddButton
              type="button"
              onClick={() =>
                appendIngredient({
                  id: ingredients.length,
                  amount: null,
                  unit: null,
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
