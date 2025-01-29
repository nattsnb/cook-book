import { Recipe } from "../../shared/types/Recipe.ts";
import { useFieldArray, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { CATEGORIES } from "../../constans/categories.ts";
import {
  StyledFormLineContainer,
  StyledFormContainer,
  StyledNumberInput,
  StyledLabelAndInputContainer,
} from "./RecipeForm.styled.tsx";

export function RecipeForm() {
  const { register, handleSubmit, control } = useForm<Recipe>({
    defaultValues: {
      id: 0,
      category: [0],
      title: "",
      photoURL: "",
      rating: 0,
      numberOfPortions: 0,
      cookingTimeInMinutes: 0,
      ingredients: [
        {
          id: 0,
          amount: 0,
          unit: "",
          name: "",
          isAllergen: false,
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
    console.log(recipeFormData);
  };

  let categoriesDropdownItems = CATEGORIES.slice(1).map((category) => (
    <option key={category.id}>{category.alt}</option>
  ));

  return (
    <StyledFormContainer>
      <form onSubmit={handleSubmit(handleRecipeFormSubmit)}>
        <StyledFormLineContainer>
          <StyledLabelAndInputContainer>
            <label>ID:</label>
            <StyledNumberInput {...register("id")} disabled={true} />
          </StyledLabelAndInputContainer>
          <StyledLabelAndInputContainer>
            <label>Tittle:</label>
            <input {...register("title")} />
          </StyledLabelAndInputContainer>
        </StyledFormLineContainer>
        <StyledFormLineContainer>
          <StyledLabelAndInputContainer>
            <label>Photo URL:</label>
            <input {...register("photoURL")} />
          </StyledLabelAndInputContainer>
        </StyledFormLineContainer>
        <StyledFormLineContainer>
          <StyledLabelAndInputContainer>
            <label>Choose category:</label>
            <select {...register("category")}>{categoriesDropdownItems}</select>
          </StyledLabelAndInputContainer>
        </StyledFormLineContainer>
        <StyledFormLineContainer>
          <StyledLabelAndInputContainer>
            <label>Raiting:</label>
            <input type="number" {...register("rating")} />
          </StyledLabelAndInputContainer>
        </StyledFormLineContainer>
        <StyledFormLineContainer>
          <StyledLabelAndInputContainer>
            <label>Number of portions:</label>
            <StyledNumberInput
              type="number"
              {...register("numberOfPortions")}
            />
          </StyledLabelAndInputContainer>
        </StyledFormLineContainer>
        <StyledFormLineContainer>
          <StyledLabelAndInputContainer>
            <label>Cooking time:</label>
            <StyledNumberInput
              type="number"
              {...register("cookingTimeInMinutes")}
            />
            <label>minutes</label>
          </StyledLabelAndInputContainer>
        </StyledFormLineContainer>
        <section>
          <Typography variant="h3">Ingredients</Typography>
          {ingredientFields.map((ingredientField, index) => {
            return (
              <div key={ingredientField.id}>
                <StyledFormLineContainer>
                  <StyledLabelAndInputContainer>
                    <label>ID:</label>
                    <StyledNumberInput {...register("id")} disabled={true} />
                  </StyledLabelAndInputContainer>
                  <StyledLabelAndInputContainer>
                    <label>Name:</label>
                    <input
                      {...register(`ingredients.${index}.name` as const)}
                    />
                  </StyledLabelAndInputContainer>
                </StyledFormLineContainer>
                <StyledFormLineContainer>
                  <StyledLabelAndInputContainer>
                    <label>Amount:</label>
                    <StyledNumberInput
                      {...register(`ingredients.${index}.amount` as const)}
                    />
                  </StyledLabelAndInputContainer>
                  <StyledLabelAndInputContainer>
                    <label>Size:</label>
                    <input
                      {...register(`ingredients.${index}.unit` as const)}
                    />
                  </StyledLabelAndInputContainer>
                </StyledFormLineContainer>
                <StyledFormLineContainer>
                  <StyledLabelAndInputContainer>
                    <label>Is allergen:</label>
                    <input
                      {...register(`ingredients.${index}.isAllergen` as const)}
                    />
                  </StyledLabelAndInputContainer>
                  <button type="button" onClick={() => removeIngredient(index)}>
                    Delete ingredient
                  </button>
                </StyledFormLineContainer>
                <StyledFormLineContainer>
                  <button
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
                  </button>
                </StyledFormLineContainer>
              </div>
            );
          })}
        </section>
        <section>
          <Typography variant="h3">Cooking steps</Typography>
          {stepFields.map((stepField, index) => {
            return (
              <div key={stepField.id}>
                <StyledFormLineContainer>
                  <StyledLabelAndInputContainer>
                    <label>ID:</label>
                    <StyledNumberInput {...register("id")} disabled={true} />
                  </StyledLabelAndInputContainer>
                  <StyledLabelAndInputContainer>
                    <label>Cooking step:</label>
                    <input
                      {...register(`cookingSteps.${index}.step` as const)}
                    />
                  </StyledLabelAndInputContainer>
                  <button type="button" onClick={() => removeStep(index)}>
                    Delete
                  </button>
                </StyledFormLineContainer>
                <StyledFormLineContainer>
                  <button
                    type="button"
                    onClick={() => appendStep({ id: 0, step: "" })}
                  >
                    Add step
                  </button>
                </StyledFormLineContainer>
              </div>
            );
          })}
        </section>

        <input type="submit" />
      </form>
    </StyledFormContainer>
  );
}
