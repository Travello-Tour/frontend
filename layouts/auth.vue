<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="auth">
    <div class='container'>
      <CommonHeader />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.auth {
	background-image: url('/img/auth/bg-auth-2.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
  height: 100vh;
}
</style>