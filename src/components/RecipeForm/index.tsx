import { Recipe } from "../../shared/types/Recipe.ts";
import { useFieldArray, useForm } from "react-hook-form";
import { Typography } from "@mui/material";

export function EntryForm() {
  const { register, handleSubmit, control } = useForm<Recipe>({
    defaultValues: {
      id: 0,
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

  return (
    <form onSubmit={handleSubmit(handleRecipeFormSubmit)}>
      <input {...register("title")} />
      <input {...register("photoURL")} />
      <input type="number" {...register("rating")} />
      <input type="number" {...register("numberOfPortions")} />
      <input type="number" {...register("cookingTimeInMinutes")} />

      <section>
        <Typography variant="h3">Ingredients</Typography>
        {ingredientFields.map((ingredientField, index) => {
          return (
            <div key={ingredientField.id}>
              <div>
                <input {...register(`ingredients.${index}.amount` as const)} />
                <input {...register(`ingredients.${index}.unit` as const)} />
                <input {...register(`ingredients.${index}.name` as const)} />
                <input
                  {...register(`ingredients.${index}.isAllergen` as const)}
                />
                <button type="button" onClick={() => removeIngredient(index)}>
                  Delete
                </button>
              </div>
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
            </div>
          );
        })}
      </section>
      <section>
        <Typography variant="h3">Cooking steps</Typography>
        {stepFields.map((stepField, index) => {
          return (
            <div key={stepField.id}>
              <div>
                <input {...register(`cookingSteps.${index}.step` as const)} />
                <button type="button" onClick={() => removeStep(index)}>
                  Delete
                </button>
              </div>
              <button
                type="button"
                onClick={() => appendStep({ id: 0, step: "" })}
              >
                Add step
              </button>
            </div>
          );
        })}
      </section>

      <input type="submit" />
    </form>
  );
}
