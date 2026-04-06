import styles from './Button.module.scss'

interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'default' | 'green'
}

function Button({ label, onClick, variant = 'default' }: ButtonProps) {
  return (
    <button
      type={onClick ? 'button' : 'submit'}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
