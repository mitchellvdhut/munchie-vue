import { ref } from 'vue'
import api from '@/api/api.ts'
import type { Ref } from 'vue'
import type { AxiosError } from 'axios'
import type { ApiResult, Member } from '@/types'

export default function useMember() {

  const members: Ref<Member[]> = ref([]);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<AxiosError | null> = ref(null);

  const fetchMembers = async () => {
    loading.value = true;
    try {
      const results = await api.get<ApiResult<Member>>('/?results=12')
      members.value = results.results
    } catch (err) {
      error.value = err as AxiosError;
    } finally {
      loading.value = false;
    }
  };

  return { members, loading, error, fetchMembers };
}
