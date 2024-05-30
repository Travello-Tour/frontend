import { object, setLocale, string, ref as yupRef } from 'yup'

export function useValidation( fields: string[], num: number = 6 ) {
  interface Schema {
    [key: string]: any
  }
  const { t } = useI18n()
  const schema: Schema = {}

  setLocale({
    mixed: {
      default: t('validation.invalid'),
    },
    string: {
      // eslint-disable-next-line no-template-curly-in-string
      min: t('validation.min') + '${min}',
      email: t('validation.email'),
    },
  })
  
  const validation: Schema = {
    login: string().email().required(t('validation.required')),
    email: string().email().required(t('validation.required')),
    password: string().min(num).required(t('validation.required')),
    passwordConfirm: string().min(num).required(t('validation.required')).oneOf([yupRef('password')], t('validation.sameAs')),
    phone_number: string().required(t('validation.required')),
    site_url: string().required(t('validation.required')),
    username: string().required(t('validation.required')),
  }

  fields.forEach(field => {
    schema[field] = validation[field]
  })

  const validationSchema = object(schema)

  return validationSchema
}