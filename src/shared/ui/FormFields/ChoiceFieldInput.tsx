import styles from './ChoiceFieldInput.module.scss'

interface ChoiceFieldInputProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function ChoiceFieldInput({ label, options, value, onChange }: ChoiceFieldInputProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Выберите...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ChoiceFieldInput
