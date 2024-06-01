<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="auth">
    <div class="auth__left">
      <img
        src="/img/auth/register-bg.png"
        alt="Image"
        class='auth__img'
      >
    </div>
    <div class='auth__right'>
      <h1 class='auth__title'>Регистрация</h1>
      <AuthForm
        :fieldsets="[fieldset]"
        buttonName="Регистрация"
        :formErrors="formErrors"
        :validationSchema="validationSchema"
        @submit-form="submit"
      />
      <div class="auth__link-wrapper">
        <span class="auth__small">  
          Уже есть аккаунт?
        </span>
        <NuxtLink
          to='/auth'
          class='auth__link'
        >Вход</NuxtLink>
      </div>
    </div>
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
  display: flex;
  height: 100%;
  
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__right {
    padding-left: 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
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

  &__title {
    position: relative;
    font-size: 26px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0;
    text-align: center;
    color: var(--c-white);

    &::after {
      position: absolute;
      left: 0;
      bottom: -12px;
      content: 'Давайте начнем';
      color: rgb(182, 180, 186);
      font-size: 12.58px;
      font-weight: 500;
      line-height: 15px;
    }
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
