import { useToast } from '@shared/model/toastContext'
import styles from './Toast.module.scss'

function Toast() {
  const { toasts } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className={styles.container}>
      {toasts.map(t => (
        <div key={t.id} className={`${styles.toast} ${styles[t.type]}`}>
          <span className={styles.icon}>{t.type === 'success' ? '✓' : '!'}</span>
          {t.message}
        </div>
      ))}
    </div>
  )
}

export default Toast
