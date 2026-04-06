import Button from '../Button/Button'
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  onConfirm?: () => void
  confirmLabel?: string
}

function Modal({ isOpen, onClose, title, children, onConfirm, confirmLabel = 'Создать' }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          <button className={styles.cancel} onClick={onClose}>Отмена</button>
          {onConfirm && (
            <Button label={confirmLabel} onClick={onConfirm} variant="green" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
