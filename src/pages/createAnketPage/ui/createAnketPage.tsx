import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { anketApi } from '@entities/anket'
import { anketFieldApi } from '@entities/anketField'
import type { FieldType } from '@entities/anketField'
import { useToast } from '@shared/model/toastContext'
import styles from './createAnketPage.module.scss'

type DraftField = {
  localId: string
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
  return String(++counter)
}

function CreateAnketPage() {
  const { folderId } = useParams<{ folderId: string }>()
  const navigate = useNavigate()

  const { showToast } = useToast()
  const [name, setName] = useState('')
  const [fields, setFields] = useState<DraftField[]>([])
  const [saving, setSaving] = useState(false)
  const [nameError, setNameError] = useState(false)

  function addField() {
    setFields(prev => [...prev, { localId: uid(), type: 'text', label: '', options: [] }])
  }

  function removeField(localId: string) {
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
    if (!folderId) return
    if (!name.trim()) {
      setNameError(true)
      return
    }
    setSaving(true)
    try {
      const anket = await anketApi.create(name.trim(), folderId)
      await Promise.all(
        fields.map((f, i) =>
          anketFieldApi.create(
            anket.id,
            i + 1,
            f.type,
            f.label || `Поле ${i + 1}`,
            f.type === 'choice' || f.type === 'checkbox' ? f.options : null,
          )
        )
      )
      showToast('Анкета успешно создана')
      navigate(`/anket/${anket.id}`)
    } catch {
      showToast('Не удалось создать анкету', 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Новая анкета</h1>

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
            {saving ? 'Сохранение...' : 'Создать анкету'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateAnketPage
