export const useConfigStore = defineStore('config', () => {
  const env = ref<Res>({})
  const apiToken = useCookie('apiToken')
  async function getEnv() {
      const resp: Res = await useFetch('/api/config')
      apiToken.value = resp.data.value.apiKey
      env.value = resp.data.value
  }

  return {
      env,
      getEnv
  }
})