import { ref } from 'vue'
import api from '@/api/api.ts'
import type { Ref } from 'vue'
import type { AxiosError } from 'axios'
import type { ApiResult, Recipe } from '@/types'

const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: 'Margherita Pizza',
    kitchen: 'Italiaans',
    ingredients: [
      'Pizza',
      'Margherita'
    ],
    preparations: [],
    preparationTime: '30 min.',
    images: [],
  }
]

export default function useRecipe() {

  const recipes: Ref<Recipe[]> = ref([]);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<AxiosError | null> = ref(null);

  const fetchRecipes = async () => {
    loading.value = true;
    try {
      // const results = await api.get<ApiResult<Recipe>>('/?results=6')
      recipes.value = mockRecipes
    } catch (err) {
      error.value = err as AxiosError;
    } finally {
      loading.value = false;
    }
  };

  return { recipes, loading, error, fetchRecipes };
}
