<template>
  <div class="swiper">
    <ClientOnly>
      <Swiper
        :slidesPerView="4"
        :height="300"
        spaceBetween="25"
        :loop="true"
        :effect="'creative'"
        :creativeEffect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide
          v-for="slide in variablesList"
          :key="slide.id"
        >
          <img
            :src="getSizeImages(slide.photo, '400x400')"
            alt=""
            width="100%"
            class="swiper-image"
          />
          <div class="content">
            <h5 class="content__title">{{ slide.name }}</h5>
            <p class="content__descr">
              Тур: {{ getBoolean(slide.is_active, 'is_active') }}
            </p>
            <p class="content__descr">
              Экскурсии: {{ getBoolean(slide.is_excursion, 'is_excursion') }}
            </p>
          </div>
        </SwiperSlide>
        <SwiperControls class="swiper-controls-custom" />
      </Swiper>
    </ClientOnly>
    <PrimeButton @click.prevent="getProducts">КЛик</PrimeButton>
  </div>
</template>

<script lang="ts" setup>
const variablesStore = useVariablesWeekendStore()
const variablesList = computed(() => variablesStore.variables)

async function getProducts() {
  await variablesStore.getVariables(apiAccommodationTypes)
}
const getBoolean = (value: boolean, type: string) => {
  if (type === 'is_active') {
    if (value) {
      return 'Доступен'
    } else {
      return 'Не доступен'
    }
  }
  if (type === 'is_excursion') {
    if (value) {
      return 'Есть'
    } else {
      return 'Нет'
    }
  }
}

await variablesStore.getVariables(apiVariables)
</script>

<style scoped lang="scss">
.swiper {
  position: relative;
  padding: 10px 0 20px 0;
  border-radius: 24px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  &-image {
    margin-bottom: auto;
    display: block;
    object-fit: cover;
    border-radius: 24px 24px 0 0;
  }
}
.content {
  padding: 15px;
  gap: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 24px 24px;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &__title {
    color: rgb(20, 24, 62);
    font-size: 24px;
    font-weight: 700;
    line-height: 115%;
    text-transform: capitalize;
  }
  &__descr {
    color: rgb(94, 98, 130);
    font-size: 18px;
    font-weight: 500;
    line-height: 124.5%;
  }
}

.swiper-controls-custom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.swiper {
  min-height: 500px;
  position: relative;
  padding: 10px 0 20px 0;
  border-radius: 24px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;

  &-image {
    display: block;
    object-fit: cover;
    border-radius: 24px 24px 0 0;
  }
}
.swiper-slide {
  min-height: 430px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.swiper-wrapper {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
