import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import type { RootState } from '@app/store'
import { adminApi } from '@features/admin/api/adminApi'
import type { AuditEntry, ManagedUser, UserRole } from '@features/admin/api/adminApi'
import { getFieldLabel } from '@features/csvTransfer/model/fieldLabels'
import { csvResources } from '@features/csvTransfer/model/resources'
import { useToast } from '@shared/model/toastContext'
import styles from './AdminPage.module.scss'

const roleLabels: Record<UserRole, string> = {
  ADMIN: 'Администратор',
  CURATOR: 'Куратор',
  ASSISTANT: 'Ассистент',
}

const actionLabels: Record<string, string> = {
  CREATE: 'Создание',
  UPDATE: 'Изменение',
  DELETE: 'Удаление',
  IMPORT: 'Импорт',
  CREATE_USER: 'Создание пользователя',
  UPDATE_USER: 'Изменение пользователя',
}

const resourceLabels = new Map([
  ...csvResources.map(resource => [resource.value, resource.label] as const),
  ['users', 'Пользователи'],
  ['dictionary-options', 'Справочники'],
])

const adminFieldLabels: Record<string, string> = {
  username: 'Логин',
  role: 'Роль',
  enabled: 'Доступ',
  createdAt: 'Дата создания',
  resource: 'Ресурс',
  fieldName: 'Поле',
  value: 'Код значения',
  label: 'Название',
  sortOrder: 'Порядок',
  active: 'Активно',
  importedRows: 'Импортировано строк',
}

type Snapshot = Record<string, unknown>

interface AuditChange {
  field: string
  before: unknown
  after: unknown
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(new Date(value))
}

function parseSnapshot(value: string | null): Snapshot {
  if (!value) return {}
  try {
    const parsed: unknown = JSON.parse(value)
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
      ? parsed as Snapshot
      : {}
  } catch {
    return {}
  }
}

function valuesEqual(left: unknown, right: unknown) {
  if (typeof left === 'number' && typeof right === 'number') {
    return left === right
  }
  return JSON.stringify(left) === JSON.stringify(right)
}

function getAuditChanges(entry: AuditEntry): AuditChange[] {
  const before = parseSnapshot(entry.beforeData)
  const after = parseSnapshot(entry.afterData)
  const fields = new Set([...Object.keys(before), ...Object.keys(after)])

  return [...fields]
    .filter(field => field !== 'id')
    .map(field => ({ field, before: before[field], after: after[field] }))
    .filter(change => {
      if (entry.action === 'UPDATE' || entry.action === 'UPDATE_USER') {
        return !valuesEqual(change.before, change.after)
      }
      return change.before != null || change.after != null
    })
}

function getAuditFieldLabel(entry: AuditEntry, field: string) {
  return adminFieldLabels[field] ?? getFieldLabel({
    name: field,
    label: field,
    type: 'string',
    isArray: false,
  }, entry.resource)
}

function formatAuditValue(value: unknown, field: string) {
  if (value === null || value === undefined || value === '') return 'Пусто'
  if (field === 'role' && typeof value === 'string' && value in roleLabels) {
    return roleLabels[value as UserRole]
  }
  if (typeof value === 'boolean') return value ? 'Да' : 'Нет'
  if (Array.isArray(value)) return value.length > 0 ? value.join(', ') : 'Пусто'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

function AdminPage() {
  const currentUser = useSelector((state: RootState) => state.auth.user)
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [tab, setTab] = useState<'users' | 'audit'>('users')
  const [users, setUsers] = useState<ManagedUser[]>([])
  const [audit, setAudit] = useState<AuditEntry[]>([])
  const [auditPage, setAuditPage] = useState(0)
  const [auditTotalPages, setAuditTotalPages] = useState(0)
  const [auditTotalElements, setAuditTotalElements] = useState(0)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<UserRole>('CURATOR')
  const [isLoading, setIsLoading] = useState(false)

  async function loadUsers() {
    setIsLoading(true)
    try {
      setUsers(await adminApi.getUsers())
    } finally {
      setIsLoading(false)
    }
  }

  async function loadAudit(page: number) {
    setIsLoading(true)
    try {
      const response = await adminApi.getAudit(page)
      setAudit(response.content)
      setAuditPage(response.number)
      setAuditTotalPages(response.totalPages)
      setAuditTotalElements(response.totalElements)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (currentUser?.role !== 'ADMIN') return
    if (tab === 'users') {
      loadUsers().catch(() => showToast('Не удалось загрузить пользователей', 'error'))
    } else {
      loadAudit(auditPage).catch(() => showToast('Не удалось загрузить аудит', 'error'))
    }
  }, [tab, auditPage, currentUser?.role])

  if (currentUser?.role !== 'ADMIN') {
    return <Navigate to="/" replace />
  }

  async function handleCreateUser(event: React.FormEvent) {
    event.preventDefault()
    try {
      await adminApi.createUser({ username: username.trim(), password, role })
      setUsername('')
      setPassword('')
      setRole('CURATOR')
      await loadUsers()
      showToast('Пользователь создан')
    } catch {
      showToast('Не удалось создать пользователя. Проверьте логин и пароль.', 'error')
    }
  }

  async function handleToggleUser(user: ManagedUser) {
    try {
      await adminApi.updateUser(user.id, { enabled: !user.enabled })
      await loadUsers()
      showToast(user.enabled ? 'Доступ отключён' : 'Доступ включён')
    } catch {
      showToast('Не удалось изменить доступ', 'error')
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.heading}>
        <div className={styles.headingMain}>
          <button
            className={styles.backButton}
            type="button"
            aria-label="Вернуться на главный экран"
            onClick={() => navigate('/')}
          >
            ←
          </button>
          <div>
            <h1>Администрирование</h1>
            <p>Пользователи и история изменений рабочих данных</p>
          </div>
        </div>
        <div className={styles.tabs}>
          <button
            className={tab === 'users' ? styles.tabActive : styles.tab}
            type="button"
            onClick={() => setTab('users')}
          >
            Пользователи
          </button>
          <button
            className={tab === 'audit' ? styles.tabActive : styles.tab}
            type="button"
            onClick={() => setTab('audit')}
          >
            Аудит
          </button>
        </div>
      </div>

      {tab === 'users' ? (
        <>
          <form className={styles.createForm} onSubmit={handleCreateUser}>
            <label>
              <span>Логин</span>
              <input
                required
                maxLength={100}
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            </label>
            <label>
              <span>Пароль</span>
              <input
                required
                minLength={6}
                type="password"
                autoComplete="new-password"
                spellCheck={false}
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </label>
            <label>
              <span>Роль</span>
              <select value={role} onChange={event => setRole(event.target.value as UserRole)}>
                {Object.entries(roleLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </label>
            <button type="submit">Создать пользователя</button>
          </form>

          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Логин</th>
                  <th>Роль</th>
                  <th>Создан</th>
                  <th>Доступ</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td><strong>{user.username}</strong></td>
                    <td>{roleLabels[user.role]}</td>
                    <td>{formatDate(user.createdAt)}</td>
                    <td>
                      <button
                        className={user.enabled ? styles.disableButton : styles.enableButton}
                        type="button"
                        disabled={user.username === currentUser.login}
                        onClick={() => handleToggleUser(user)}
                      >
                        {user.enabled ? 'Отключить' : 'Включить'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {isLoading && <div className={styles.loading}>Загрузка...</div>}
          </div>
        </>
      ) : (
        <>
          <div className={styles.auditSummary}>Всего событий: {auditTotalElements}</div>
          <div className={styles.auditList}>
            {audit.map(entry => {
              const changes = getAuditChanges(entry)
              return (
                <details key={entry.id} className={styles.auditEntry}>
                  <summary>
                    <time>{formatDate(entry.createdAt)}</time>
                    <strong>{entry.username}</strong>
                    <span>{actionLabels[entry.action] ?? entry.action}</span>
                    <span>
                      {resourceLabels.get(entry.resource) ?? entry.resource}
                      {entry.entityId ? ` #${entry.entityId}` : ''}
                    </span>
                  </summary>
                  <div className={styles.auditDetails}>
                    <div className={styles.changeHeader}>
                      <span>Поле</span>
                      <span>Было</span>
                      <span>Стало</span>
                    </div>
                    {changes.map(change => (
                      <div key={change.field} className={styles.changeRow}>
                        <strong>{getAuditFieldLabel(entry, change.field)}</strong>
                        <span>{formatAuditValue(change.before, change.field)}</span>
                        <span>{formatAuditValue(change.after, change.field)}</span>
                      </div>
                    ))}
                    {changes.length === 0 && (
                      <div className={styles.noChanges}>Значимых изменений не найдено</div>
                    )}
                  </div>
                </details>
              )
            })}
            {!isLoading && audit.length === 0 && <div className={styles.loading}>Событий пока нет</div>}
          </div>
          <div className={styles.pagination}>
            <button
              type="button"
              disabled={auditPage === 0 || isLoading}
              onClick={() => setAuditPage(page => page - 1)}
            >
              Назад
            </button>
            <span>{auditPage + 1} из {Math.max(auditTotalPages, 1)}</span>
            <button
              type="button"
              disabled={auditPage + 1 >= auditTotalPages || isLoading}
              onClick={() => setAuditPage(page => page + 1)}
            >
              Далее
            </button>
          </div>
        </>
      )}
    </main>
  )
}

export default AdminPage
