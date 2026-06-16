import type { CsvRecord, CsvRecordValue, DictionaryOption } from '../api/csvTransferApi'
import { resourceFormSchemas } from './formSchemas'
import type { FormFieldSchema, ResourceFormSchema } from './formSchemas'

const supplementalSchemas: Record<string, ResourceFormSchema> = {
  'trainee-contacts': {
    schemaName: 'TraineeContactRequestDto',
    fields: [
      { name: 'contactFullName', label: 'Contact Full Name', type: 'string', isArray: false },
      { name: 'relationship', label: 'Relationship', type: 'string', isArray: false },
      { name: 'phone', label: 'Phone', type: 'string', isArray: false },
      { name: 'otherContacts', label: 'Other Contacts', type: 'string', isArray: false },
      { name: 'traineeFullName', label: 'Trainee Full Name', type: 'string', isArray: false },
      { name: 'createdAt', label: 'Created At', type: 'string', format: 'date-time', isArray: false },
    ],
  },
}

const resourceFieldNames: Record<string, string[]> = {
  'candidate-questionnaires': [
    'fullName',
    'citizenship',
    'registrationRegion',
    'temporaryRegistration',
    'hasRelativesAbroad',
    'changedCitizenship',
    'militaryRegistration',
    'hasJob',
    'targetEducation',
    'travelAvailability',
    'phone',
    'email',
    'telegramUrl',
    'birthDate',
    'passedExam',
    'russianExamScore',
    'mathematicsExamScore',
    'thirdExamSubject',
    'thirdExamScore',
    'additionalExamSubject',
    'additionalExamScore',
    'totalExamScore',
    'educationInstitution',
    'educationInstitutionOther',
    'faculty',
    'department',
    'degree',
    'course',
    'specialty',
    'universityAverageScore',
    'universityChoicePrinciple',
    'workOrInternship',
    'foreignLanguages',
    'educationalInterests',
    'projects',
    'additionalEducation',
    'achievements',
    'skills',
    'growthAreas',
    'source',
    'referrerFullName',
    'hobbies',
    'idealWorkplace',
    'idealEmployer',
    'professions',
    'personalDataConsent',
  ],
  'curator-three-sixty-reviews': [
    'averageScore',
    'curator',
    'communication',
    'discipline',
    'selfMotivation',
    'loyalty',
    'motivationOfOthers',
    'comment',
  ],
}

export function getResourceFormSchema(
  resource?: string,
  dictionaryOptions: DictionaryOption[] = [],
) {
  if (!resource) return undefined
  const schema = resourceFormSchemas[resource] ?? supplementalSchemas[resource]
  if (!schema) return undefined

  const optionsByField = new Map<string, Array<{ value: string; label: string }>>()
  dictionaryOptions.forEach(option => {
    const fieldOptions = optionsByField.get(option.fieldName) ?? []
    fieldOptions.push({ value: option.value, label: option.label })
    optionsByField.set(option.fieldName, fieldOptions)
  })

  return {
    ...schema,
    fields: schema.fields.map(field => ({
      ...field,
      enumValues: optionsByField.get(field.name),
    })),
  }
}

export function getResourceFields(resource: string | undefined, schema?: ResourceFormSchema) {
  if (!schema) return []
  const fieldNames = resource ? resourceFieldNames[resource] : undefined
  if (!fieldNames) return schema.fields

  const fieldsByName = new Map(schema.fields.map(field => [field.name, field]))
  return fieldNames
    .map(name => fieldsByName.get(name))
    .filter((field): field is FormFieldSchema => Boolean(field))
}

export function collectDisplayColumns(records: CsvRecord[], fields: FormFieldSchema[]) {
  const availableColumns = new Set<string>()
  records.forEach(record => {
    Object.keys(record).forEach(key => {
      if (key !== 'id') availableColumns.add(key)
    })
  })

  const schemaColumns = fields
    .map(field => field.name)
    .filter(name => availableColumns.delete(name))

  return [...schemaColumns, ...availableColumns]
}

function formatDate(value: string) {
  const normalized = value.replace(/^DATE_/, '').replace(/_/g, '-')
  const match = normalized.match(
    /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::\d{2}(?:\.\d+)?)?)?/,
  )
  if (!match) return value

  const [, year, month, day, hours, minutes] = match
  const date = `${Number(day)}.${Number(month)}.${year}`
  return hours && minutes ? `${date} ${hours}:${minutes}` : date
}

function formatSingleValue(value: string, field?: FormFieldSchema) {
  const enumLabel = field?.enumValues?.find(option => option.value === value)?.label ?? value
  if (
    field?.format === 'date'
    || field?.format === 'date-time'
    || enumLabel.startsWith('DATE_')
  ) {
    return formatDate(enumLabel)
  }
  return enumLabel
}

export function formatDisplayValue(value: CsvRecordValue, field?: FormFieldSchema) {
  if (value === null || value === undefined || value === '') return '-'
  if (Array.isArray(value)) return value.map(item => formatSingleValue(item, field)).join(', ')
  if (typeof value === 'boolean') return value ? 'Да' : 'Нет'
  if (typeof value === 'string') return formatSingleValue(value, field)
  return String(value)
}
