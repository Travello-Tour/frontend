<template>
  <div>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="link"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
interface AvailableLocales {
  [key: string]: any
}

const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed<AvailableLocales>(() => (locales.value))


</script>

<style scoped lang='scss'>
.link {
  cursor: pointer;
  text-decoration: none;
  color: var(--c-text-1);
  font-weight: 400;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
</style>