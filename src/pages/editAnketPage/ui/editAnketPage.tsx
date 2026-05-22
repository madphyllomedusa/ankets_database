import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { anketApi } from '@entities/anket'
import { anketFieldApi } from '@entities/anketField'
import type { FieldType } from '@entities/anketField'
import { useToast } from '@shared/model/toastContext'
import { Loader } from '@shared/ui'
import styles from './editAnketPage.module.scss'

type DraftField = {
  localId: string
  serverId?: string
  type: FieldType
  label: string
  options: string[]
}

const FIELD_TYPE_LABELS: Record<FieldType, string> = {
  text: 'Текст',
  number: 'Число',
  stars: 'Звёзды',
  choice: 'Один вариант',
  checkbox: 'Несколько вариантов',
}

let counter = 0
function uid() {
  return `new-${++counter}`
}

function EditAnketPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { showToast } = useToast()

  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [fields, setFields] = useState<DraftField[]>([])
  const [deletedIds, setDeletedIds] = useState<string[]>([])
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!id) return
    Promise.all([anketApi.getById(id), anketFieldApi.getByAnket(id)])
      .then(([anket, serverFields]) => {
        setName(anket.name)
        setFields(
          serverFields
            .sort((a, b) => a.order - b.order)
            .map(f => ({
              localId: f.id,
              serverId: f.id,
              type: f.type,
              label: f.label,
              options: f.options ?? [],
            }))
        )
      })
      .catch(() => showToast('Не удалось загрузить анкету', 'error'))
      .finally(() => setLoading(false))
  }, [id])

  function addField() {
    setFields(prev => [...prev, { localId: uid(), type: 'text', label: '', options: [] }])
  }

  function removeField(localId: string) {
    const field = fields.find(f => f.localId === localId)
    if (field?.serverId) {
      setDeletedIds(prev => [...prev, field.serverId!])
    }
    setFields(prev => prev.filter(f => f.localId !== localId))
  }

  function updateField(localId: string, patch: Partial<DraftField>) {
    setFields(prev => prev.map(f => f.localId === localId ? { ...f, ...patch } : f))
  }

  function addOption(localId: string) {
    setFields(prev => prev.map(f =>
      f.localId === localId ? { ...f, options: [...f.options, ''] } : f
    ))
  }

  function updateOption(localId: string, index: number, value: string) {
    setFields(prev => prev.map(f => {
      if (f.localId !== localId) return f
      const options = [...f.options]
      options[index] = value
      return { ...f, options }
    }))
  }

  function removeOption(localId: string, index: number) {
    setFields(prev => prev.map(f => {
      if (f.localId !== localId) return f
      return { ...f, options: f.options.filter((_, i) => i !== index) }
    }))
  }

  async function handleSave() {
    if (!id) return
    if (!name.trim()) {
      setNameError(true)
      return
    }
    setSaving(true)
    try {
      await anketApi.update(id, name.trim())
      await Promise.all(deletedIds.map(sid => anketFieldApi.delete(sid)))
      await Promise.all(
        fields.map((f, i) => {
          const order = i + 1
          const label = f.label || `Поле ${i + 1}`
          const options = f.type === 'choice' || f.type === 'checkbox' ? f.options : null
          if (f.serverId) {
            return anketFieldApi.update(f.serverId, { order, type: f.type, label, options })
          }
          return anketFieldApi.create(id, order, f.type, label, options)
        })
      )
      showToast('Анкета обновлена')
      navigate(`/anket/${id}`)
    } catch {
      showToast('Не удалось сохранить изменения', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <Loader fullPage />

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <button className={styles.backBtn} onClick={() => navigate(-1)} title="Назад">←</button>
          <h1 className={styles.heading}>Редактировать анкету</h1>
        </div>

        <div className={styles.section}>
          <label className={styles.label}>Название анкеты</label>
          <input
            className={`${styles.nameInput} ${nameError ? styles.nameInputError : ''}`}
            placeholder="Введите название..."
            value={name}
            onChange={e => { setName(e.target.value); setNameError(false) }}
          />
          {nameError && <p className={styles.error}>Введите название анкеты</p>}
        </div>

        <div className={styles.section}>
          <div className={styles.fieldsHeader}>
            <span className={styles.label}>Поля</span>
            <button className={styles.addFieldBtn} onClick={addField}>+ Добавить поле</button>
          </div>

          {fields.length === 0 && (
            <p className={styles.empty}>Нет полей. Добавьте хотя бы одно.</p>
          )}

          <div className={styles.fieldsList}>
            {fields.map((field, index) => (
              <div key={field.localId} className={styles.fieldCard}>
                <div className={styles.fieldRow}>
                  <span className={styles.fieldIndex}>{index + 1}</span>

                  <select
                    className={styles.typeSelect}
                    value={field.type}
                    onChange={e => updateField(field.localId, {
                      type: e.target.value as FieldType,
                      options: [],
                    })}
                  >
                    {(Object.keys(FIELD_TYPE_LABELS) as FieldType[]).map(t => (
                      <option key={t} value={t}>{FIELD_TYPE_LABELS[t]}</option>
                    ))}
                  </select>

                  <input
                    className={styles.labelInput}
                    placeholder="Вопрос / подпись..."
                    value={field.label}
                    onChange={e => updateField(field.localId, { label: e.target.value })}
                  />

                  <button
                    className={styles.removeFieldBtn}
                    onClick={() => removeField(field.localId)}
                    title="Удалить поле"
                  >
                    ✕
                  </button>
                </div>

                {(field.type === 'choice' || field.type === 'checkbox') && (
                  <div className={styles.options}>
                    <span className={styles.optionsLabel}>Варианты:</span>
                    {field.options.map((opt, i) => (
                      <div key={i} className={styles.optionRow}>
                        <input
                          className={styles.optionInput}
                          placeholder={`Вариант ${i + 1}`}
                          value={opt}
                          onChange={e => updateOption(field.localId, i, e.target.value)}
                        />
                        <button
                          className={styles.removeOptionBtn}
                          onClick={() => removeOption(field.localId, i)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    <button
                      className={styles.addOptionBtn}
                      onClick={() => addOption(field.localId)}
                    >
                      + Вариант
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={() => navigate(-1)}>
            Отмена
          </button>
          <button className={styles.saveBtn} onClick={handleSave} disabled={saving}>
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditAnketPage
