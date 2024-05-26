import { defineStore } from 'pinia'

export const useMyDestinationsStore = defineStore('destination', () => {
  const destination = ref<Destination[]>([])

  async function getDestination(url: string) {
    const { data, error } = await useCustomFetch(url)
    const res: Res | any = data.value
    if (res) {
      console.log(res.results)
      destination.value = res.results
    }
    if (error.value) {
      console.log(error.value)
    }
  }

  return {
    destination,
    getDestination
  }
})
