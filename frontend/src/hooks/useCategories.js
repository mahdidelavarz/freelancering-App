import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categoryService";
export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
    retry: false,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((cat) => ({
    label: cat.title,
    value: cat._id,
  }));

  const transformedCategories = rawCategories.map((cat) => ({
    label: cat.title,
    value: cat.englishTitle,
  }));
  return { isLoading, categories, transformedCategories };
}
