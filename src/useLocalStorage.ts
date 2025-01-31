import { useEffect, useState } from "react";
import { Recipe } from "./shared/types/Recipe.ts";

interface StorageValueFunctionsArgumentsInterface {
  key: string;
  defaultValue: Recipe[] | null;
}

function getStorageValue({
  key,
  defaultValue,
}: StorageValueFunctionsArgumentsInterface) {
  const answer: any = localStorage.getItem(key);
  const value = JSON.parse(answer);
  return value || defaultValue;
}

export const useLocalStorage = ({
  key,
  defaultValue,
}: StorageValueFunctionsArgumentsInterface) => {
  const [value, setValue] = useState<Recipe[] | null>(() =>
    getStorageValue({ key, defaultValue }),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
