import type { FormFieldSchema } from './formSchemas'

const LONG_TEXT_FIELD_PATTERN =
  /(comment|feedback|goal|history|result|description|reason|expect|achievement|interest|recommendation|development|growth|education|project|knowledge|mission|success|workplace|quality|motivation|additional|other|about|suggest|impression|area)/i

export function isLongTextField(field: FormFieldSchema, value: unknown) {
  if (field.type !== 'string' || field.format || field.isArray || field.enumValues) {
    return false
  }

  return LONG_TEXT_FIELD_PATTERN.test(field.name)
    || (typeof value === 'string' && (value.length > 80 || value.includes('\n')))
}

export function getLongTextRows(value: unknown) {
  if (typeof value !== 'string') return 5
  if (value.length > 600) return 10
  if (value.length > 250) return 7
  return 5
}
