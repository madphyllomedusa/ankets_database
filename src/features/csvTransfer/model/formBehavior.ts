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

function isNegativeValue(value: string | string[] | undefined, label: string) {
  if (Array.isArray(value)) return false
  return /^(no|NO|Нет|НЕТ)$/i.test(value ?? '')
    || /^(нет|не сдавал|не сдавал \(-ла\))$/i.test(label.trim())
}

function isOtherValue(value: string | string[] | undefined, label: string) {
  if (Array.isArray(value)) return false
  return /other|INSTITUTION_25/i.test(value ?? '') || /другое|нет в списке|иной|иное/i.test(label)
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
    || field.name === 'additionalExamSubject'
    || field.name === 'totalExamScore'
  ) {
    const passedExam = getSelectedLabel(getField(fields, 'passedExam'), values.passedExam)
    return isAffirmativeValue(values.passedExam, passedExam)
  }

  if (field.name === 'thirdExamScore') {
    const passedExam = getSelectedLabel(getField(fields, 'passedExam'), values.passedExam)
    return isAffirmativeValue(values.passedExam, passedExam) && Boolean(values.thirdExamSubject)
  }

  if (field.name === 'additionalExamScore') {
    const passedExam = getSelectedLabel(getField(fields, 'passedExam'), values.passedExam)
    const additionalExam = getSelectedLabel(
      getField(fields, 'additionalExamSubject'),
      values.additionalExamSubject,
    )
    return isAffirmativeValue(values.passedExam, passedExam)
      && Boolean(values.additionalExamSubject)
      && !isNegativeValue(values.additionalExamSubject, additionalExam)
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
    return values.source === 'CENTER_EMPLOYEE' || /сотрудник/i.test(source)
  }

  return true
}

export function getFieldHint(resource: string | undefined, fieldName: string) {
  if (resource !== 'candidate-questionnaires') return undefined

  const hints: Record<string, string> = {
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
