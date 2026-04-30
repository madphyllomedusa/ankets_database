import { useParams } from 'react-router-dom'
import { anketApi, AnketItem, Anket } from '@entities/anket'
import { anketFieldApi, AnketField } from '@entities/anketField'
import { submissionApi, Submission } from '@entities/submission'
import { useEffect, useState } from 'react'
import styles from './anketPage.module.scss'

function renderValue(value: string | number | string[] | undefined, type: string): string {
  if (value === undefined || value === null || value === '') return '—'
  if (Array.isArray(value)) return value.length === 0 ? '—' : value.join(', ')
  if (type === 'stars') {
    const n = Number(value)
    return '★'.repeat(n) + '☆'.repeat(5 - n)
  }
  return String(value)
}


function AnketPage() {
  const { id } = useParams<{ id: string }>()
  const [anket, setAnket] = useState<Anket | null>(null)
  const [fields, setFields] = useState<AnketField[]>([])
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    anketApi.getById(id).then(setAnket)
    anketFieldApi.getByAnket(id).then(setFields)
    submissionApi.getByAnket(id).then(setSubmissions)
  }, [id])

  return (
    <div className={styles.page}>
      <button className={styles.formButton} onClick={() => setOpenModal(true)}>
        Формы
      </button>

      {anket && <h1 className={styles.anketTitle}>{anket.name}</h1>}

      {submissions.length === 0 ? (
        <p className={styles.empty}>Нет заполненных анкет</p>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {fields.map(f => (
                  <th key={f.id}>{f.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, i) => (
                <tr
                  key={sub.id}
                  className={
                    selectedId === sub.id
                      ? styles.rowSelected
                      : i % 2 === 0 ? styles.rowEven : styles.rowOdd
                  }
                  onClick={() => setSelectedId(prev => prev === sub.id ? null : sub.id)}
                >
                  {fields.map(f => {
                    const answer = sub.answers.find(a => a.fieldId === f.id)
                    return (
                      <td key={f.id} className={f.type === 'stars' ? styles.tdStars : undefined}>
                        {renderValue(answer?.value, f.type)}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {openModal && (
        <div className={styles.overlay} onClick={() => setOpenModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
              ✕
            </button>
            <h2 className={styles.title}>Формы</h2>
            {anket && <AnketItem anket={anket} />}
          </div>
        </div>
      )}
    </div>
  )
}

export default AnketPage
