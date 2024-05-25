import { defineStore } from 'pinia'

export const useVariablesWeekendStore = defineStore(
  'myVariablesWeekendStore',
  () => {
    const variables = ref<Variables[]>([])
    async function getVariables(url: string) {
      const { data, error } = await useCustomFetch(url)
      const res: Res | any = data.value
      if (res) {
        console.log(res.results)
        variables.value = res.results
      }
      if (error.value) {
        console.log(error.value)
      }
    }

    return {
      getVariables,
      variables,
    }
  }
)
