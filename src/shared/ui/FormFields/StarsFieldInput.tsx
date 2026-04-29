import styles from './StarsFieldInput.module.scss'

interface StarsFieldInputProps {
  label: string
  value: number
  onChange: (value: number) => void
}

function StarsFieldInput({ label, value, onChange }: StarsFieldInputProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`${styles.star} ${star <= value ? styles['star--active'] : ''}`}
            onClick={() => onChange(star)}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  )
}

export default StarsFieldInput
