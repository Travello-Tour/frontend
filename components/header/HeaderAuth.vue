<template>
  <div class='wrapper__auth'>
    <CommonButton
      :to='"/login"'
      :text='"login"'
    />
    <CommonButton
      :to='"/auth"'
      :text='"signUp"'
      :border='"1px solid var(--c-text-1)"'
      :borderRadius='"5px"'
      :fontWeight='"400"'
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