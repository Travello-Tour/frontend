<template>
  <NuxtLink
    class='button'
    :to='`${lang}to`'
  >
    {{ $t(`header.${text}`) }}
  </NuxtLink>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const lang = computed(() => locale.value === 'ru' ? '' : `/${locale.value}`)

interface Props {
  text?: string
  border?: string
  color?: string
  padding?: string
  fontSize?: string
  fontWeight?: string
  to: string
  borderRadius?: string
}

withDefaults(defineProps<Props>(), {
  text: 'Button',
  border: 'none',
  color: "var(--c-text-1)",
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  fontWeight: '400',
  borderRadius: '0',
})

// const emit = defineEmits(['click'])

</script>

<style scoped lang='scss'>
.button {
  text-decoration: none;
  cursor: pointer;
  border: v-bind(border);
  color: v-bind(color);
  background: none;
  padding: v-bind(padding);
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);
  border-radius: v-bind(borderRadius);
}
</style>