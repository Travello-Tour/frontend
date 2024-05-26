import { defineStore } from 'pinia';

export const useVariables = defineStore(
  'myVariablesWeekendStore',
  () => {
    const variables = ref<Variables[]>([])
    const errors = ref<any>([])
    const pagination = ref<Pagination>({
      current_page: 1,
      per_page: 0,
      total_items: 0,
      total_pages: 0,
    })
    async function getVariables(url: string, page?: number, limit?: number) {
      let modyfiedUrl = url;
      if (page && limit) {
        modyfiedUrl += `?page=${page}&limit=${limit}`;
      }
      const { data, error } = await useCustomFetch(modyfiedUrl)
      const res: Res | any = data.value
      if (res) {
        pagination.value = res.pagination
        variables.value = res.results
        console.log(pagination.value);
      }
      if (error.value) {
        errors.value = error.value
      }
    }

    return {
      getVariables,
      variables,pagination
    }
  }
)
