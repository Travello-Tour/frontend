<template>
  <VeeForm
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
        <VeeField
          :id="name"
          :as="as"
          :name="name"
          :type="type"
          class="form__input"
          :value="attrs.value"
          v-bind="attrs"
        />
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
    <PrimeButton
      class="form__btn"
      type='submit'
    >
      {{ buttonName }}
    </PrimeButton>
  </VeeForm>
</template>

<script lang="ts" setup>
import Crypto from 'crypto-js';
defineProps<{
  fieldsets: Fieldsets,
  buttonName?: string,
  formErrors: string[] | null,
}>()

const emit = defineEmits(['submitForm'])

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
	max-width: 400px;
	align-self: center;

	&__btn {
		cursor: pointer;
		border: none;
		border-radius: 30px;
		font-size: 15px;
		font-weight: 700;
		color: var(--c-text-1);
		outline: none;
		background-color: rgba(255, 255, 255, 0.7);
		height: 45px;
    display: flex;
    justify-content: center;
		padding-left: 20px;
		padding-right: 20px;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: rgba(255, 255, 255, 1);
		}

	}

	&__title {
		text-align: center;
		color: var(--c-white);
	}

	&__fieldset {
		display: grid;
		grid-template-columns: minmax(min-content, 100%);
		border: none;
		padding: 0;
	}

	&__input {
		width: 400px;
		min-height: 45px;
		border-radius: 30px;
		font-size: 15px;
		font-weight: 500;
		padding: 0 15px;
		color: var(--c-text-1);
		border: 1px solid transparent;
		outline: none;
		background: rgba(255, 255, 255, 0.2);
		transition: background 0.3s ease-in-out, border 0.3s ease-in-out;

		&::placeholder {
			color: var(--c-text-1);
		}

		&:focus {
			background: rgba(255, 255, 255, 0.4);
			border: 1px solid var(--c-white);
		}
	}
}

.form {
  // --max-width: 300px;
  // display: grid;
  // grid-template-columns: minmax(min-content, var(--max-width));
  // row-gap: 40px;
  // margin-block-end: 24px;

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
