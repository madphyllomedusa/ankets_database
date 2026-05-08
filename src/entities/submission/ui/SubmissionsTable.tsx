import { useState, useEffect, useRef, useCallback } from 'react'
import type { AnketField } from '@entities/anketField'
import { submissionApi } from '../api/submissionApi'
import type { Submission } from '../model/types'
import styles from './SubmissionsTable.module.scss'

type EditingCell = {
  submissionId: string
  fieldId: string
  value: string | number | string[]
}

interface Props {
  fields: AnketField[]
  submissions: Submission[]
  onUpdate: (updated: Submission) => void
}

function renderValue(value: string | number | string[] | undefined, type: string): string {
  if (value === undefined || value === null || value === '') return '—'
  if (Array.isArray(value)) return value.length === 0 ? '—' : value.join(', ')
  if (type === 'stars') {
    const n = Number(value)
    return '★'.repeat(n) + '☆'.repeat(5 - n)
  }
  return String(value)
}

function SubmissionsTable({ fields, submissions, onUpdate }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [editing, setEditing] = useState<EditingCell | null>(null)

  const editingTdRef = useRef<HTMLTableCellElement | null>(null)
  const editingRef = useRef<EditingCell | null>(null)
  const submissionsRef = useRef(submissions)
  const onUpdateRef = useRef(onUpdate)
  editingRef.current = editing
  submissionsRef.current = submissions
  onUpdateRef.current = onUpdate

  const save = useCallback(async (valueOverride?: string | number | string[]) => {
    const cell = editingRef.current
    if (!cell) return
    editingRef.current = null
    setEditing(null)
    const value = valueOverride !== undefined ? valueOverride : cell.value
    const sub = submissionsRef.current.find(s => s.id === cell.submissionId)
    if (!sub) return
    const newAnswers = sub.answers.some(a => a.fieldId === cell.fieldId)
      ? sub.answers.map(a => a.fieldId === cell.fieldId ? { ...a, value } : a)
      : [...sub.answers, { fieldId: cell.fieldId, value }]
    const updated = await submissionApi.update(sub.id, newAnswers)
    onUpdateRef.current(updated)
  }, [])

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (!editingRef.current) return
      if (editingTdRef.current?.contains(e.target as Node)) return
      save()
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [save])

  function startEdit(sub: Submission, field: AnketField, e: React.MouseEvent) {
    e.stopPropagation()
    const answer = sub.answers.find(a => a.fieldId === field.id)
    let value: string | number | string[]
    if (field.type === 'checkbox') {
      value = Array.isArray(answer?.value) ? (answer.value as string[]) : []
    } else if (field.type === 'stars') {
      value = Number(answer?.value ?? 0)
    } else if (field.type === 'choice') {
      value = String(answer?.value ?? field.options?.[0] ?? '')
    } else {
      value = answer?.value !== undefined && answer.value !== null ? String(answer.value) : ''
    }
    setEditing({ submissionId: sub.id, fieldId: field.id, value })
  }

  function renderEditor(field: AnketField) {
    if (!editing) return null
    const { value } = editing

    if (field.type === 'text' || field.type === 'number') {
      return (
        <input
          autoFocus
          type={field.type}
          value={String(value)}
          className={styles.cellInput}
          onChange={e => setEditing(prev => prev
            ? { ...prev, value: field.type === 'number' ? Number(e.target.value) || 0 : e.target.value }
            : prev
          )}
          onBlur={() => save()}
          onKeyDown={e => {
            if (e.key === 'Enter') save()
            if (e.key === 'Escape') setEditing(null)
          }}
          onClick={e => e.stopPropagation()}
        />
      )
    }

    if (field.type === 'choice') {
      return (
        <select
          autoFocus
          value={String(value)}
          className={styles.cellSelect}
          onChange={e => save(e.target.value)}
          onBlur={() => setEditing(null)}
          onClick={e => e.stopPropagation()}
        >
          {(field.options ?? []).map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )
    }

    if (field.type === 'stars') {
      const n = Number(value)
      return (
        <div className={styles.cellStars} onClick={e => e.stopPropagation()}>
          {[1, 2, 3, 4, 5].map(star => (
            <button key={star} className={styles.cellStar} onClick={() => save(star)}>
              {star <= n ? '★' : '☆'}
            </button>
          ))}
          <button className={styles.cellCancelBtn} onClick={() => setEditing(null)}>✕</button>
        </div>
      )
    }

    if (field.type === 'checkbox') {
      const checked = Array.isArray(value) ? (value as string[]) : []
      return (
        <div className={styles.cellCheckboxes} onClick={e => e.stopPropagation()}>
          {(field.options ?? []).map(opt => (
            <label key={opt} className={styles.cellCheckboxLabel}>
              <input
                type="checkbox"
                checked={checked.includes(opt)}
                onChange={e => {
                  const next = e.target.checked
                    ? [...checked, opt]
                    : checked.filter(v => v !== opt)
                  setEditing(prev => prev ? { ...prev, value: next } : prev)
                }}
              />
              {opt}
            </label>
          ))}
          <div className={styles.cellCheckboxActions}>
            <button className={styles.cellSaveBtn} onClick={() => save()}>✓</button>
            <button className={styles.cellCancelBtn} onClick={() => setEditing(null)}>✕</button>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {fields.map(f => <th key={f.id}>{f.label}</th>)}
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
                const isCellEditing = editing?.submissionId === sub.id && editing.fieldId === f.id
                return (
                  <td
                    key={f.id}
                    ref={isCellEditing ? editingTdRef : undefined}
                    className={[
                      f.type === 'stars' && !isCellEditing ? styles.tdStars : '',
                      isCellEditing ? styles.tdEditing : '',
                    ].filter(Boolean).join(' ')}
                    onDoubleClick={e => startEdit(sub, f, e)}
                  >
                    {isCellEditing ? renderEditor(f) : renderValue(answer?.value, f.type)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SubmissionsTable
