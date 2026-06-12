import { forwardRef } from 'react'
import styles from './Input.module.scss'

interface InputProps {
  value: string
  onChange: (value: string) => void
  type?: React.HTMLInputTypeAttribute
  autoComplete?: string
  placeholder?: string
  label?: string
  autoFocus?: boolean
  onBlur?: () => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    value,
    onChange,
    type = 'text',
    autoComplete,
    placeholder,
    label,
    autoFocus,
    onBlur,
    onKeyDown,
  }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={ref}
          type={type}
          autoComplete={autoComplete}
          className={styles.input}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
      </div>
    )
  }
)

export default Input
