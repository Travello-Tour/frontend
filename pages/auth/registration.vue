<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="auth">
    <h1 class='auth__title'>Добро Пожаловать</h1>
    <AuthForm
      :fieldsets="[fieldset]"
      buttonName="Регистрация"
      :formErrors="formErrors"
      :validationSchema="validationSchema"
      @submit-form="submit"
    />
    <NuxtLink
      to='/login'
      class='auth__link'
    >Войти</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const validationSchema = useValidation(['username', 'password', "email"])
const userStore = useUserStore()

const formErrors = ref<string[] | null>(null)
const formScheme = reactive({
  fields: [
    {
      name: 'email',
      as: 'input',
      type: 'email',
      placeholder: 'Введите email',
    },
    {
      name: 'username',
      as: 'input',
      type: 'text',
      placeholder: 'Ваше имя',
    },
    {
      name: 'password',
      as: 'input',
      type: 'password',
      placeholder: 'Введите пароль',
      icon: true,
    },
  ],
})

const fieldset = ref({
  scheme: formScheme,
})
definePageMeta({
	layout: 'auth',
})

const submit = async (body: User) => {
  await userStore.registration(body)
  if(!userStore.errors) {
    formErrors.value = null
  } 
  if (userStore.errors && typeof userStore.errors === 'object') {
    formErrors.value = Object.values(userStore.errors)
  }
}
</script>

<style scoped lang="scss">
.auth {
	display: grid;
  row-gap: 20px;
	place-content: center;
	align-items: center;
	height: 85vh;

  &__title {
    font-size: 36px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0;
    text-align: center;
    color: var(--c-white);
  }

  &__link {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    color: var(--c-white);
  }
}
</style>
