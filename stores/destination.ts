import { defineStore } from 'pinia'

export const useDestinationStore = defineStore('destination', () => {
  const destination = ref<Destination[]>([])
  const errors = ref<any>([])
  const pagination = ref<Pagination>({
    current_page: 1,
    per_page: 0,
    total_items: 0,
    total_pages: 0,
  })
  async function getDestination(url: string, page?: number, limit?: number) {
    let modyfiedUrl = url
    if (page && limit) {
      modyfiedUrl += `?page=${page}&limit=${limit}`
    }
    const { data, error } = await useCustomFetch(modyfiedUrl)
    const res: Res | any = data.value
    if (res) {
      console.log(res.results)
      pagination.value = res.pagination
      destination.value = res.results
    }
    if (error.value) {
      errors.value = error.value
    }
  }

  return {
    destination,
    getDestination,
    pagination
  }
})
