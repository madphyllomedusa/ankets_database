import type { FormFieldSchema } from './formSchemas'
import type { FormValues } from './formValidation'

function getSelectedLabel(field: FormFieldSchema | undefined, value: string | string[] | undefined) {
  if (!field || Array.isArray(value) || !value) return ''
  return field.enumValues?.find(option => option.value === value)?.label ?? value
}

function getField(fields: FormFieldSchema[], name: string) {
  return fields.find(field => field.name === name)
}

function isAffirmativeValue(value: string | string[] | undefined, label: string) {
  if (Array.isArray(value)) return value.length > 0
  return value === 'true'
    || /^(yes|YES|Да|ДА)$/i.test(value ?? '')
    || /^(да|сдавал|есть)$/i.test(label.trim())
}

function isOtherValue(value: string | string[] | undefined, label: string) {
  if (Array.isArray(value)) return false
  return /other/i.test(value ?? '') || /другое|иной|иное/i.test(label)
}

function isSaintPetersburgRegion(label: string) {
  return /санкт|спб|sankt|saint|петербург|ленинград/i.test(label)
}

export function shouldShowField(
  resource: string | undefined,
  field: FormFieldSchema,
  values: FormValues,
  fields: FormFieldSchema[],
) {
  if (resource !== 'candidate-questionnaires') return true

  if (field.name === 'temporaryRegistration') {
    const registrationRegion = getSelectedLabel(
      getField(fields, 'registrationRegion'),
      values.registrationRegion,
    )
    return Boolean(values.registrationRegion) && !isSaintPetersburgRegion(registrationRegion)
  }

  if (
    field.name === 'russianExamScore'
    || field.name === 'mathematicsExamScore'
    || field.name === 'thirdExamSubject'
  ) {
    const passedExam = getSelectedLabel(getField(fields, 'passedExam'), values.passedExam)
    return isAffirmativeValue(values.passedExam, passedExam)
  }

  if (field.name === 'thirdExamScore') {
    return Boolean(values.thirdExamSubject)
  }

  if (field.name === 'additionalExamScore') {
    return Boolean(values.additionalExamSubject)
  }

  if (field.name === 'educationInstitutionOther') {
    const educationInstitution = getSelectedLabel(
      getField(fields, 'educationInstitution'),
      values.educationInstitution,
    )
    return isOtherValue(values.educationInstitution, educationInstitution)
  }

  if (field.name === 'referrerFullName') {
    const source = getSelectedLabel(getField(fields, 'source'), values.source)
    return /рекоменд/i.test(source)
  }

  return true
}

export function getFieldHint(resource: string | undefined, fieldName: string) {
  if (resource !== 'candidate-questionnaires') return undefined

  const hints: Record<string, string> = {
    temporaryRegistration: 'Если не СПб и Ленинградская область, укажите временную регистрацию.',
    russianExamScore: 'Появляется, если кандидат сдавал ЕГЭ.',
    educationInstitutionOther: 'Появляется, если выбрано другое учебное заведение.',
    referrerFullName: 'Появляется, если источник - рекомендатель сотрудник.',
    personalDataConsent: 'Нажимая на кнопку отправки, кандидат соглашается с политикой обработки персональных данных.',
  }

  return hints[fieldName]
}

export function getConsentLabel(resource: string | undefined, fieldName: string) {
  if (resource === 'candidate-questionnaires' && fieldName === 'personalDataConsent') {
    return 'Согласен на обработку персональных данных'
  }

  return undefined
}
