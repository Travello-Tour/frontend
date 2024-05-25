<template>
  <div class="wrapper">
    <button
      class="swiper-button"
      @click="swiper.slidePrev()"
    >
      <Icon
        name="ic:baseline-arrow-back-ios-new"
        color="#fff"
        size="3.5rem"
      />
    </button>
    <button
      class="swiper-button"
      @click="swiper.slideNext()"
    >
      <Icon
        name="ic:baseline-arrow-forward-ios"
        color="#fff"
        size="3.5rem"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
const swiper = useSwiper()
</script>

<style>
.swiper-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
