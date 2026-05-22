import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { anketApi, Anket } from '@entities/anket'
import { anketFieldApi } from '@entities/anketField'
import type { AnketField } from '@entities/anketField/model/types'
import { submissionApi } from '@entities/submission'
import { TextFieldInput, ChoiceFieldInput, StarsFieldInput, CheckboxFieldInput } from '@shared/ui/FormFields'
import { useToast } from '@shared/model/toastContext'
import { Loader } from '@shared/ui'
import styles from './fillAnketPage.module.scss'

type FormValue = string | number | string[]

function FillAnketPage() {
  const { id } = useParams<{ id: string }>()
  const [anket, setAnket] = useState<Anket | null>(null)
  const [fields, setFields] = useState<AnketField[]>([])
  const [formData, setFormData] = useState<Record<string, FormValue>>({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { showToast } = useToast()

  useEffect(() => {
    if (!id) return

    Promise.all([anketApi.getById(id), anketFieldApi.getByAnket(id)])
      .then(([anketData, fieldsData]) => {
        setAnket(anketData)
        setFields(fieldsData)
        const initialData: Record<string, FormValue> = {}
        fieldsData.forEach((field) => {
          if (field.type === 'stars') initialData[field.id] = 0
          else if (field.type === 'checkbox') initialData[field.id] = []
          else initialData[field.id] = ''
        })
        setFormData(initialData)
      })
      .finally(() => setLoading(false))
  }, [id])

  function handleFieldChange(fieldId: string, value: FormValue) {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    setErrors(prev => { const next = { ...prev }; delete next[fieldId]; return next })
  }

  function validate(): Record<string, string> {
    const newErrors: Record<string, string> = {}
    fields.forEach((field) => {
      const value = formData[field.id]
      if (field.type === 'stars' && (value as number) === 0) {
        newErrors[field.id] = 'Поставьте оценку'
      } else if (field.type === 'checkbox' && (value as string[]).length === 0) {
        newErrors[field.id] = 'Выберите хотя бы один вариант'
      } else if ((field.type === 'text' || field.type === 'choice' || field.type === 'number') && String(value).trim() === '') {
        newErrors[field.id] = 'Заполните это поле'
      }
    })
    return newErrors
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!id || submitting) return

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const answers = fields.map((field) => ({
      fieldId: field.id,
      value: formData[field.id],
    }))

    setSubmitting(true)
    try {
      await submissionApi.create(id, answers)
      setSubmitted(true)
    } catch {
      showToast('Не удалось отправить анкету', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return <Loader fullPage />
  if (!anket) return <div className={styles.page}>Анкета не найдена</div>

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Анкета успешно заполнена!</h2>
          <p className={styles.successText}>Ваши ответы были сохранены.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{anket.name}</h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.id}>
              {field.type === 'text' && (
                <TextFieldInput
                  label={field.label}
                  value={formData[field.id] as string}
                  onChange={(value) => handleFieldChange(field.id, value)}
                />
              )}

              {field.type === 'number' && (
                <TextFieldInput
                  label={field.label}
                  type="number"
                  value={String(formData[field.id])}
                  onChange={(value) => handleFieldChange(field.id, value ? Number(value) : '')}
                />
              )}

              {field.type === 'choice' && field.options && (
                <ChoiceFieldInput
                  label={field.label}
                  options={field.options}
                  value={formData[field.id] as string}
                  onChange={(value) => handleFieldChange(field.id, value)}
                />
              )}

              {field.type === 'stars' && (
                <StarsFieldInput
                  label={field.label}
                  value={formData[field.id] as number}
                  onChange={(value) => handleFieldChange(field.id, value)}
                />
              )}

              {field.type === 'checkbox' && field.options && (
                <CheckboxFieldInput
                  label={field.label}
                  options={field.options}
                  value={formData[field.id] as string[]}
                  onChange={(value) => handleFieldChange(field.id, value)}
                />
              )}

              {errors[field.id] && (
                <p className={styles.fieldError}>{errors[field.id]}</p>
              )}
            </div>
          ))}

          <div className={styles.footer}>
            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting ? 'Сохранение...' : 'Отправить'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FillAnketPage
