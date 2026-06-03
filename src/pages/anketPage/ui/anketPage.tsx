import { useParams, useNavigate } from 'react-router-dom'
import { anketApi, AnketItem, Anket } from '@entities/anket'
import { anketFieldApi, AnketField } from '@entities/anketField'
import { submissionApi, Submission, SubmissionsTable } from '@entities/submission'
import { useEffect, useState } from 'react'
import { Loader } from '@shared/ui'
import { useToast } from '@shared/model/toastContext'
import styles from './anketPage.module.scss'

function AnketPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { showToast } = useToast()

  const [loading, setLoading] = useState(true)
  const [anket, setAnket] = useState<Anket | null>(null)
  const [fields, setFields] = useState<AnketField[]>([])
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (!id) return
    Promise.all([
      anketApi.getById(id),
      anketFieldApi.getByAnket(id),
      submissionApi.getByAnket(id),
    ])
      .then(([anketData, fieldsData, subsData]) => {
        setAnket(anketData)
        setFields(fieldsData.sort((a, b) => a.order - b.order))
        setSubmissions(subsData)
      })
      .finally(() => setLoading(false))
  }, [id])

  async function handleFieldUpdate(updated: AnketField) {
    try {
      const saved = await anketFieldApi.update(updated.id, {
        type: updated.type,
        label: updated.label,
        options: updated.options,
      })
      setFields(prev => prev.map(f => f.id === saved.id ? saved : f))
      showToast('Тип поля обновлён')
    } catch {
      showToast('Не удалось обновить тип поля', 'error')
    }
  }

  if (loading) return <Loader fullPage />

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => navigate(-1)} title="Назад">
          ←
        </button>
        {anket && <h1 className={styles.anketTitle}>{anket.name}</h1>}
        <div className={styles.actions}>
          <button className={styles.editButton} onClick={() => navigate(`/edit-anket/${id}`)}>
            Редактировать
          </button>
          <button className={styles.formButton} onClick={() => setOpenModal(true)}>
            Формы
          </button>
        </div>
      </div>

      {submissions.length === 0 ? (
        <p className={styles.empty}>Нет заполненных анкет</p>
      ) : (
        <SubmissionsTable
          fields={fields}
          submissions={submissions}
          onUpdate={updated => setSubmissions(prev => prev.map(s => s.id === updated.id ? updated : s))}
          onDelete={id => setSubmissions(prev => prev.filter(s => s.id !== id))}
          onFieldUpdate={handleFieldUpdate}
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
