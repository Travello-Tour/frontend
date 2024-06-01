<template>
  <div class='account'>
    <NuxtLink
      to="/account/profile"
      class='account__link'
    >
      <Icon
        name='mdi:account-arrow-right'
        color='var(--c-grey-3)'
        size="2rem"
      />
    </NuxtLink>
    <NuxtLink
      to='/'
      class='account__link'
      @click="userStore.logout"
    >
      <Icon
        name='mdi:logout'
        color='var(--c-grey-3)'
        size="2rem"
      />
    </NuxtLink>
  </div>
 

  
</template>

<script lang="ts" setup>
const userStore = useUserStore()


</script>

<style scoped lang="scss">
.account {
  display: flex;
  gap: 12px;

  &__link {
    border-radius: 50%;
    padding: 5px;
    border: 1px solid var(--c-grey-9);
    cursor: pointer;
    text-decoration: none;
  }
}
</style>