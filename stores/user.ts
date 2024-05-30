import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", () => {
  const userAuth = ref(false)
  const user = ref<User>({
    id: 0,
    username: "",
    email: "",
  })
  const errors = ref<any>()

  async function registration(body: User) {
    errors.value = null
    const { data, error } = await useCustomFetch(apiAuth, {
      method: "POST",
      body
    })
    const res: User | any = data.value
    if (res) {
      user.value = res
      userAuth.value = true
      navigateTo('/')
    }
    if (error.value) {
      errors.value = error.value.data
    }
  }

  async function getAuth(body: Omit<User, 'id'>) {
    errors.value = null
    const { data, error } = await useCustomFetch(`${apiAuth}/login`, {
      method: "POST",
      body
    })
    const res: User | any = data.value
    if (res) {
      user.value = res
      userAuth.value = true
      navigateTo('/')
    }
    if (error.value) {
      errors.value = error.value.data
    }
  }

  function logout() {
    userAuth.value = false
    user.value = {
      id: 0,
      username: "",
      email: ""
    }
  }

  return { 
    user,
    registration,
    errors,
    getAuth,
    userAuth,
    logout
  }
})
