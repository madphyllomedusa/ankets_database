import styles from './Input.module.scss'

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
}

function Input({ value, onChange, placeholder, label }: InputProps) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
