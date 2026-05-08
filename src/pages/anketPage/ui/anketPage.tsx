import { useParams } from 'react-router-dom'
import { anketApi, AnketItem, Anket } from '@entities/anket'
import { anketFieldApi, AnketField } from '@entities/anketField'
import { submissionApi, Submission, SubmissionsTable } from '@entities/submission'
import { useEffect, useState } from 'react'
import styles from './anketPage.module.scss'

function AnketPage() {
  const { id } = useParams<{ id: string }>()
  const [anket, setAnket] = useState<Anket | null>(null)
  const [fields, setFields] = useState<AnketField[]>([])
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [openModal, setOpenModal] = useState(false)

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
        <SubmissionsTable
          fields={fields}
          submissions={submissions}
          onUpdate={updated => setSubmissions(prev => prev.map(s => s.id === updated.id ? updated : s))}
        />
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
