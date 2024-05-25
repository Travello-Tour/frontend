<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang='ts'>
const configStore = useConfigStore()
await useAsyncData('config', () => configStore.getEnv())
</script>
