import styles from './CheckboxFieldInput.module.scss'

interface CheckboxFieldInputProps {
  label: string
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
}

function CheckboxFieldInput({ label, options, value, onChange }: CheckboxFieldInputProps) {
  function toggle(option: string) {
    if (value.includes(option)) {
      onChange(value.filter(v => v !== option))
    } else {
      onChange([...value, option])
    }
  }

  return (
    <div className={styles.field}>
      <span className={styles.label}>{label}</span>
      <div className={styles.options}>
        {options.map(option => (
          <label key={option} className={styles.option}>
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => toggle(option)}
              className={styles.checkbox}
            />
            <span className={styles.optionText}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default CheckboxFieldInput
