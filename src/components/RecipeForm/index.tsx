
import {Recipe} from "../../shared/types/Recipe.ts";
import {useForm} from "react-hook-form";


type RecipeForm = Omit<Recipe, "id">;

export function EntryForm() {

  const {register, handleSubmit} = useForm<RecipeForm>()
  const handleRecipeFormSubmit = (recipeFormData: RecipeForm) => {console.log(recipeFormData)}


  return (<form onSubmit={handleSubmit(handleRecipeFormSubmit)}>
    <input {...register("title")} />
    <input type="submit" />

    </form>)
}
