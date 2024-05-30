<template>
  <div class='container'>
    <h1>{{ userStore.user.username }}</h1>
    <h2>{{ userStore.user.email }}</h2>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
})

const userStore = useUserStore()
</script>

<style>

</style>