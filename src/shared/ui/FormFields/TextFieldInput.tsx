import styles from './TextFieldInput.module.scss'

interface TextFieldInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'number'
}

function TextFieldInput({ label, value, onChange, type = 'text' }: TextFieldInputProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
      />
    </div>
  )
}

export default TextFieldInput
