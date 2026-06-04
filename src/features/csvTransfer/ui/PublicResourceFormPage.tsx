import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { csvTransferApi } from '../api/csvTransferApi'
import type { CsvRecord } from '../api/csvTransferApi'
import { csvResources } from '../model/resources'
import { resourceFormSchemas } from '../model/formSchemas'
import type { FormFieldSchema } from '../model/formSchemas'
import { getFieldLabel } from '../model/fieldLabels'
import { isRequiredField, validateResourceForm } from '../model/formValidation'
import styles from './PublicResourceFormPage.module.scss'

function normalizeValue(field: FormFieldSchema, value: string | string[]) {
  if (Array.isArray(value)) return value
  if (value === '') return undefined
  if (value.startsWith('DATE_')) return value.replace('DATE_', '').replaceAll('_', '-')
  if (field.type === 'integer' || field.type === 'number') return Number(value)
  if (field.type === 'boolean') return value === 'true'
  return value
}

function PublicResourceFormPage() {
  const { resource } = useParams<{ resource: string }>()
  const selectedResource = csvResources.find(item => item.value === resource)
  const formSchema = resource ? resourceFormSchemas[resource] : undefined
  const [formValues, setFormValues] = useState<Record<string, string | string[]>>({})
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fields = useMemo(() => formSchema?.fields ?? [], [formSchema])

  if (!selectedResource || !formSchema) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <h1 className={styles.title}>Форма не найдена</h1>
          <p className={styles.text}>Проверьте ссылку или запросите новую у администратора.</p>
        </section>
      </main>
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!resource) return

    const errors = validateResourceForm(fields, formValues)
    setFormErrors(errors)
    if (Object.keys(errors).length > 0) return

    const payload: CsvRecord = {}
    fields.forEach(field => {
      const value = normalizeValue(field, formValues[field.name] ?? (field.isArray ? [] : ''))
      if (value !== undefined && (!Array.isArray(value) || value.length > 0)) {
        payload[field.name] = value
      }
    })

    try {
      setIsSubmitting(true)
      await csvTransferApi.createRecord(resource, payload)
      setIsSubmitted(true)
      setFormValues({})
      setFormErrors({})
    } finally {
      setIsSubmitting(false)
    }
  }

  function renderField(field: FormFieldSchema) {
    const value = formValues[field.name] ?? (field.isArray ? [] : '')

    if (field.isArray && field.enumValues) {
      const selected = Array.isArray(value) ? value : []
      return (
        <div className={styles.checkboxList}>
          {field.enumValues.map(option => (
            <label key={option.value} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={e => {
                  setFormValues(prev => ({
                    ...prev,
                    [field.name]: e.target.checked
                      ? [...selected, option.value]
                      : selected.filter(item => item !== option.value),
                  }))
                  setFormErrors(prev => ({ ...prev, [field.name]: '' }))
                }}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      )
    }

    if (field.enumValues) {
      return (
        <select
          className={styles.control}
          value={String(value)}
          onChange={e => {
            setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
            setFormErrors(prev => ({ ...prev, [field.name]: '' }))
          }}
        >
          <option value="">Не выбрано</option>
          {field.enumValues.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      )
    }

    if (field.type === 'boolean') {
      return (
        <select
          className={styles.control}
          value={String(value)}
          onChange={e => {
            setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
            setFormErrors(prev => ({ ...prev, [field.name]: '' }))
          }}
        >
          <option value="">Не выбрано</option>
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
      )
    }

    return (
      <input
        className={styles.control}
        type={field.format === 'date-time' ? 'datetime-local' : field.format === 'date' ? 'date' : field.type === 'integer' || field.type === 'number' ? 'number' : 'text'}
        step={field.type === 'number' ? '0.01' : undefined}
        value={String(value)}
        onChange={e => {
          setFormValues(prev => ({ ...prev, [field.name]: e.target.value }))
          setFormErrors(prev => ({ ...prev, [field.name]: '' }))
        }}
      />
    )
  }

  return (
    <main className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>{selectedResource.label}</h1>
        <p className={styles.text}>Заполните форму и отправьте ответы.</p>

        {isSubmitted && (
          <div className={styles.success}>Ответ отправлен. Можно закрыть страницу.</div>
        )}

        <div className={styles.fields}>
          {fields.map(field => (
            <label key={field.name} className={`${styles.field} ${formErrors[field.name] ? styles.fieldError : ''}`}>
              <span className={styles.label}>
                {getFieldLabel(field)}
                {isRequiredField(field) && <span className={styles.required}> *</span>}
              </span>
              {renderField(field)}
              {formErrors[field.name] && <span className={styles.errorText}>{formErrors[field.name]}</span>}
            </label>
          ))}
        </div>

        <button className={styles.submit} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>
      </form>
    </main>
  )
}

export default PublicResourceFormPage
