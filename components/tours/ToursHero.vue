<template>
  <div class="tours">
    <div
      v-for='{photo, name, id, is_active, is_excursion} in variablesList'
      :key='id'
      class="tours__card"
    >
      <img
        class='tours__img'
        :src="getSizeImages(photo, '400x400')"
        alt=""
      >
      <div class="tours__content">
        <h2 class="tours__title">{{ name }}</h2>
        <h4 class='tours__descr'>Тур: {{ getBoolean(is_active, 'is_active') }}</h4>
        <h4 class='tours__descr'>Экскурсия: {{ getBoolean(is_excursion, 'is_excursion') }}</h4>
      </div>
    </div>
  </div>
  <PrimePaginator
    v-model:first='count'
    :rows="1"
    :totalRecords="pagination.total_pages"
    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
  ></PrimePaginator>
</template>

<script lang="ts" setup>
const variablesStore = useVariables()
const variablesList = computed(() => variablesStore.variables)
const count = ref(0)
const pagination = computed(() => variablesStore.pagination)

watch(count, () => {
  switchPage(count.value + 1)
})
const switchPage = async (page:number) => {
  await variablesStore.getVariables(apiVariables, page, 4)
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
useAsyncData('variables', () => variablesStore.getVariables(apiVariables, count.value + 1, 4))
</script>

<style scoped lang="scss">
.tours {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 15px;
  }

  &__card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 24px;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
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
