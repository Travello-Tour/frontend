<template>
  <div class='header'>
    <img
      src="/img/header/logo-desktop.png"
      alt="Logo"
      class="header__logo"
    />
    <nav class='header__nav'>
      <ul class="header__list">
        <li
          v-for='{to, text} in menuHeader' 
          :key='text'
          class="header__item"
        >
          <CommonButton
            :text='text'
            :color='"var(--c-text-1)"'
            :to='to'
            :fontWeight='"400"'
          />
        </li>
      </ul>
    </nav>
    <HeaderAuth/>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang='scss'>
.header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__logo {
    margin-right: auto;
  }

  &__nav {
    margin-right: 70px;
  }
}
</style>
