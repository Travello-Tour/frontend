<template>
  <NuxtLink
    class='button'
    :to='to'
  >
    {{ text }}
  </NuxtLink>
</template>

<script lang="ts" setup>

interface Props {
  text?: string
  border?: string
  color?: string
  padding?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
  to: string
  borderRadius?: string
}
withDefaults(defineProps<Props>(), {
  text: 'Button',
  border: 'none',
  fontFamily: 'Inter',
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
  font-family: v-bind(fontFamily);
  border: v-bind(border);
  color: v-bind(color);
  background: none;
  padding: v-bind(padding);
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);
  border-radius: v-bind(borderRadius);
}
</style>