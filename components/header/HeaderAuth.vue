<template>
  <div class='wrapper__auth'>
    <CommonButton
      :to='"/auth"'
      :text='"Войти"'
      :fontWeight='"700"'
    />
    <CommonButton
      :to='"/auth/registration"'
      :text='"Регистрация"'
      :border='"1px solid var(--c-text-1)"'
      :borderRadius='"5px"'
      :fontWeight='"700"'
    />
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang='scss'>
.wrapper__auth {
  display: flex;
  gap: 10px;
}
</style>