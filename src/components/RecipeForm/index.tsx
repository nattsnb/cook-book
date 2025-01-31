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
  StyledTitleButtonImage,
  BottomMarginCentralContainer,
  StyledSubmitButton,
  StyledTextarea,
} from "./RecipeForm.styled.tsx";
import { BackButton } from "../BackButton";
import { useContext } from "react";
import { RecipeContextType } from "../../shared/types/RecipeContextType.ts";
import { RecipeContext } from "../../App.tsx";

const UNITS: string[] = ["ml", "l", "g", "kg", "tsp", "tbsp", "cup", "each"];

const RATING: number[] = Array.from({ length: 11 }, (_, i) => i * 0.5);

export function RecipeForm() {
  const { savedRecipes, setSavedRecipes } =
    useContext<RecipeContextType>(RecipeContext);
  const { register, handleSubmit, control } = useForm<Recipe>({
    defaultValues: {
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
    },
  });

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

  const handleRecipeFormSubmit = (recipeFormData: Recipe) => {
    const newRecipe: Recipe = createRecipeFromData(recipeFormData);
    const newSavedRecipes = [...savedRecipes, newRecipe];
    setSavedRecipes(newSavedRecipes);
  };

  const createRecipeFromData = (data: Recipe) => {
    const newRecipe: Recipe = {
      id: data.id,
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
      <BackButton />
      <BottomMarginCentralContainer>
        <StyledTitleButtonImage />
      </BottomMarginCentralContainer>
      <StyledForm onSubmit={handleSubmit(handleRecipeFormSubmit)}>
        <StyledFormLineContainer>
          <StyledLabelAndNumberInputContainer>
            <label>ID:</label>
            <StyledNumberInput {...register("id")} disabled={true} required />
          </StyledLabelAndNumberInputContainer>
          <StyledLabelAndStringInputContainer>
            <label>Tittle:</label>
            <StyledStringInput {...register("title")} required />
          </StyledLabelAndStringInputContainer>
        </StyledFormLineContainer>
        <StyledFormLineContainer>
          <StyledLabelAndStringInputContainer>
            <label>Photo URL:</label>
            <StyledStringInput {...register("photoURL")} required />
          </StyledLabelAndStringInputContainer>
        </StyledFormLineContainer>
        <StyledFormLineContainer>
          <StyledLabelAndSelectContainer>
            <label>Choose category:</label>
            <StyledSelect {...register("category")} required>
              {categoriesDropdownItems}
            </StyledSelect>
          </StyledLabelAndSelectContainer>
        </StyledFormLineContainer>
        <StyledFormLineWrapContainer>
          <StyledLabelAndSelectContainer>
            <label>Rating:</label>
            <StyledSelect {...register("rating")}>
              {ratingDropdownItems}
            </StyledSelect>
          </StyledLabelAndSelectContainer>
          <StyledLabelAndNumberInputContainer>
            <label>Portions:</label>
            <StyledNumberInput
              type="number"
              {...register("numberOfPortions")}
              required
            />
          </StyledLabelAndNumberInputContainer>
          <StyledLabelAndNumberInputContainer>
            <label>Cooking time:</label>
            <StyledNumberInput
              type="number"
              {...register("cookingTimeInMinutes")}
              required
            />
          </StyledLabelAndNumberInputContainer>
          <label>min</label>
        </StyledFormLineWrapContainer>
        <section>
          <Typography variant="h3">Ingredients</Typography>
          <StyledDivider />
          {ingredientFields.map((ingredientField, index) => {
            return (
              <div key={ingredientField.id}>
                <StyledIngredientEntry>
                  <StyledFormLineContainer>
                    <StyledLabelAndNumberInputContainer>
                      <label>ID:</label>
                      <StyledNumberInput
                        {...register("id")}
                        disabled={true}
                        required
                      />
                    </StyledLabelAndNumberInputContainer>
                    <StyledLabelAndStringInputContainer>
                      <label>Name:</label>
                      <StyledStringInput
                        {...register(`ingredients.${index}.name`)}
                        required
                      />
                    </StyledLabelAndStringInputContainer>
                  </StyledFormLineContainer>
                  <StyledFormLineWrapContainer>
                    <StyledLabelAndNumberInputContainer>
                      <label>Amount:</label>
                      <StyledNumberInput
                        {...register(`ingredients.${index}.amount`)}
                        required
                      />
                    </StyledLabelAndNumberInputContainer>
                    <StyledLabelAndSelectContainer>
                      <label>Size:</label>
                      <StyledSelect
                        {...register(`ingredients.${index}.unit`)}
                        required
                      >
                        {unitsDropdownItems}
                      </StyledSelect>
                    </StyledLabelAndSelectContainer>
                    <StyledLabelAndSelectContainer>
                      <label>Is allergen:</label>
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
                  id: 0,
                  amount: 0,
                  unit: "",
                  name: "",
                  isAllergen: false,
                })
              }
            >
              Add ingredient
            </StyledAddButton>
          </CentralContainer>
        </section>
        <section>
          <Typography variant="h3">Cooking steps</Typography>
          <StyledDivider />
          {stepFields.map((stepField, index) => {
            return (
              <div key={stepField.id}>
                <StyledFormLineContainer>
                  <StyledLabelAndNumberInputContainer>
                    <label>ID:</label>
                    <StyledNumberInput
                      {...register("id")}
                      disabled={true}
                      required
                    ></StyledNumberInput>
                  </StyledLabelAndNumberInputContainer>
                  <StyledLabelAndStringInputContainer>
                    <label>Cooking step:</label>
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
              onClick={() => appendStep({ id: 0, step: "" })}
            >
              Add step
            </StyledAddButton>
          </TopMarginCentralContainer>
        </section>
        <TopMarginCentralContainer>
          <StyledSubmitButton type="submit">
            <img />
          </StyledSubmitButton>
        </TopMarginCentralContainer>
      </StyledForm>
    </StyledFormContainer>
  );
}
