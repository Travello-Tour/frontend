<template>
  <VeeForm
    ref='form'
    class="form"
    @submit="onSubmit"
  >
    <fieldset
      v-for="(fieldset, index) in fieldsets"
      :key="index"
      class="form__fieldset"
    >
      <div
        v-for="{
          as,
          name,
          type,
          ...attrs
        } in fieldset.scheme.fields"
        :key="name"
      >
        <div class="form__input-wrapper">
          <VeeField
            :id="name"
            :as="as"
            :name="name"
            :type="type"
            class="form__input"
            :value="attrs.value"
            v-bind="attrs"
          />
        
          <img
            :src="`/svg/common/${name}.svg`"
            alt="name"
            class='form__img'
          >
        </div>
        
        <VeeErrorMessage
          :name="name"
          class="form__error"
        />
      </div>
    </fieldset>
    <span
      v-for="error in formErrors"
      :key="error"
      class="form__errors"
    >
      {{ typeof error === 'string' ? error : error[0] }}
    </span>
    <div class="form__wrapper-btn">
      <PrimeButton
        class="form__btn-cancel"
        @click='clearInputs'
      >
        Отмена
      </PrimeButton>
      <PrimeButton
        class="form__btn"
        type='submit'
      >
        {{ buttonName }}
      </PrimeButton>
    </div>
  </VeeForm>
</template>

<script lang="ts" setup>
import Crypto from 'crypto-js';
defineProps<{
  fieldsets: Fieldsets,
  buttonName?: string,
  formErrors: string[] | null,
}>()

const form = ref(null);
const emit = defineEmits(['submitForm'])

const clearInputs = () => {
  navigateTo('/')
  // if(form.value) {
  //   (form.value as any).resetForm();
  // }
};
const onSubmit = (values: any) => {
  if(values.password) {
    values.password = Crypto.SHA256(values.password).toString()
  }
  emit('submitForm', values)
}
</script>

<style scoped lang="scss">
.form {
	border-radius: 8px;
	display: grid;
	grid-template-columns: 1fr;
	flex-direction: column;
	row-gap: 15px;
	max-width: 270px;
	align-self: center;

	&__btn {
		cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 13.13px;
    font-weight: 400;
    line-height: 16px;
    padding: 0.5rem 1.70rem;
    justify-self: flex-end;
    text-align: center;
		outline: none;
		transition: background 0.3s ease;
    box-sizing: border-box;
    border: 1px solid rgb(236, 77, 188);
    border-radius: 6px;
    background: rgb(236, 77, 188);

		&:hover {
      background: rgb(220, 26, 162);
		}

    &-cancel {
      color: rgb(252, 97, 97);
      box-sizing: border-box;
      border: 1px solid rgb(252, 97, 97);
      border-radius: 6px;
      background: transparent;
      font-size: 13.13px;
      font-weight: 400;
      line-height: 16px;
      padding: 0.5rem 1.70rem;
      transition: color 0.3s ease, background 0.3s ease;

      &:hover {
        background: rgb(252, 97, 97);
        color: rgb(255, 255, 255);
      }
    }
	}

  &__wrapper-btn {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }
	&__title {
		text-align: center;
		color: var(--c-white);
	}

	&__fieldset {
    position: relative;
		display: grid;
		grid-template-columns: minmax(min-content, 100%);
		border: none;
		padding: 0;
	}

  &__input-wrapper {
    position: relative;
  }

	&__input {
    width: 270px;
    height: 30px;
		border-radius: 6px;
		font-size: 15px;
		font-weight: 400;
		padding: 0 8px;
    padding-left: 30px;
    color: rgb(255, 255, 255);
		border: 1px solid transparent;
		outline: none;
		background: rgba(255, 255, 255, 0.2);
		transition: background 0.3s ease-in-out, border 0.3s ease-in-out;

		&::placeholder {
			color: rgb(134, 140, 155);
      font-size: 13.34px;
      font-weight: 400;
      line-height: 16px;
		}

		&:focus {
			border: 1px solid rgb(236, 77, 188);
		}
	}

  &__img {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.form {
  &__fieldset {
    display: grid;
    grid-template-columns: minmax(min-content, 100%);
    row-gap: 16px;
    border: none;
    padding: 0;
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 500;
    margin-block-end: 20px;
  }

  &__box {
    display: grid;
    grid-template-columns: 1fr;
  }

  &__label {
    margin-block-end: 6px;
    font-size: 14px;
    font-weight: 600;
  }

  &__box > .common-input {
    grid-column: 1 / 1;
    grid-row: 2 / 3;
  }

  &__icon-box {
    grid-column: 1 / 1;
    grid-row: 2 / 3;
    justify-self: end;
    align-self: center;
    padding-inline: 12px;
    height: 100%;
    display: flex;
  }

  &__error {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    font-size: 14px;
    color: var(--c-status-text-2);
  }

  &__button {
    padding-block: 11px;
  }
}
.form__errors {
  display: block;
  font-size: 14px;
    color: var(--c-status-text-2);
}

</style>
