import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { anketApi, Anket } from '@entities/anket'
import { anketFieldApi } from '@entities/anketField'
import type { AnketField } from '@entities/anketField/model/types'
import { TextFieldInput, ChoiceFieldInput, StarsFieldInput, CheckboxFieldInput } from '@shared/ui/FormFields'
import styles from './fillAnketPage.module.scss'

type FormValue = string | number | string[]

function FillAnketPage() {
  const { id } = useParams<{ id: string }>()
  const [anket, setAnket] = useState<Anket | null>(null)
  const [fields, setFields] = useState<AnketField[]>([])
  const [formData, setFormData] = useState<Record<string, FormValue>>({})
  const [loading, setLoading] = useState(true)

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
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  if (loading) return <div className={styles.page}>Загрузка...</div>
  if (!anket) return <div className={styles.page}>Анкета не найдена</div>

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
            </div>
          ))}

          <div className={styles.footer}>
            <button type="submit" className={styles.submitBtn}>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FillAnketPage
