import type { FormFieldSchema } from './formSchemas'

export type FormValue = string | string[]
export type FormValues = Record<string, FormValue>
export type FormErrors = Record<string, string>

const REQUIRED_FIELD_NAMES = new Set([
  'fullName',
  'employeeFullName',
  'name',
])

function isEmptyValue(value: FormValue | undefined) {
  return value === undefined || value === '' || (Array.isArray(value) && value.length === 0)
}

export function isRequiredField(field: FormFieldSchema) {
  return REQUIRED_FIELD_NAMES.has(field.name)
}

export function validateResourceForm(fields: FormFieldSchema[], values: FormValues) {
  const errors: FormErrors = {}

  fields.forEach(field => {
    const value = values[field.name]

    if (isRequiredField(field) && isEmptyValue(value)) {
      errors[field.name] = 'Обязательное поле'
      return
    }

    if (isEmptyValue(value)) return

    if (field.enumValues) {
      const allowedValues = new Set(field.enumValues.map(option => option.value))
      const selectedValues = Array.isArray(value) ? value : [value]
      if (selectedValues.some(item => !allowedValues.has(item))) {
        errors[field.name] = 'Выберите значение из списка'
      }
      return
    }

    if (!Array.isArray(value) && (field.type === 'integer' || field.type === 'number')) {
      if (!Number.isFinite(Number(value))) {
        errors[field.name] = 'Введите число'
      }
      return
    }

    if (!Array.isArray(value) && field.name.toLowerCase().includes('email')) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[field.name] = 'Введите корректный email'
      }
    }
  })

  return errors
}
