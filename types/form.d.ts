interface Field {
  label?: string
  name?: string
  as?: string
  type: string
  placeholder?: string 
  icon?: boolean
}

interface Fieldsets {
  scheme: Field[]
}

interface CommonFormBody {
  [key: string]: string
}