<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="auth">
    <div class="auth__left">
      <img
        src="/img/auth/login-bg.png"
        alt="Image"
        class='auth__img'
      >
    </div>
    <div class='auth__right'>
      <h1 class='auth__title'>Вход</h1>
      <AuthForm
        :fieldsets="[fieldset]"
        buttonName="Войти"
        :formErrors="formErrors"
        :validationSchema="validationSchema"
        @submit-form="submit"
      />
      <div class="auth__link-wrapper">
        <span class="auth__small">  
          Нет учетной записи?
        </span>
        <NuxtLink
          to='/auth/registration'
          class='auth__link'
        >Регистрация</NuxtLink>
      </div>
      
    </div>
   
  </div>
</template>

<script lang="ts" setup>
const validationSchema = useValidation(['password', "email"])
const userStore = useUserStore()

definePageMeta({
	layout: 'auth',
})
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
const submit = async (body: any) => {
  await userStore.getAuth(body)
  if(!userStore.errors) {
    formErrors.value = null
  } 
  if (userStore.errors && typeof userStore.errors === 'object') {
    formErrors.value = Object.values(userStore.errors)
  }
}
</script>

<style scoped lang='scss'>
.auth {
	display: flex;
  height: 100%;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__small {
    display: block;
    color: rgb(182, 180, 186);
    font-size: 13.45px;
    font-weight: 500;
    line-height: 16px;
  }
  &__link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  &__right {
    padding-left: 140px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 30px;
  }

  &__title {
    color: rgb(255, 255, 255);
    font-size: 20.84px;
    font-weight: 600;
    line-height: 25.2px;
  }

  &__link {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
  }
}
</style>