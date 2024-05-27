<template>
  <div class='destination'>
    <div
      v-for='{photo, name, id, name_where} in destinationList'
      :key='id'
      class="destination__card"
    >
      <img
        class='destination__img'
        :src="getSizeImages(photo, '400x400')"
        alt=""
      >
      <div class="destination__content">

        <h2 class="destination__title">
          {{ name }}
        </h2>
        <h4 class='destination__descr'>
          {{ name_where }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const destinationStore = useDestinationStore()
const destinationList = computed(() => destinationStore.destination)

useAsyncData('destination', () => destinationStore.getDestination(apiDestination))
</script>

<style scoped lang='scss'>
.destination {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  &__card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 24px;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 15px;
  }

  &__title {
    color: rgb(20, 24, 62);
    font-size: 20px;
    font-weight: 700;
    line-height: 115%;
    text-transform: capitalize;
  }

  &__img {
    object-fit: cover;
    display: block;
    border-radius: 24px 24px 0 0;
  }

  &__descr {
    color: rgb(94, 98, 130);
    font-size: 18px;
    font-weight: 500;
    line-height: 124.5%;
  }
}
</style>