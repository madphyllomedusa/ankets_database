import styles from './Button.module.scss'

interface ButtonProps {
  label: string
  onClick: () => void
  color?: string
  background?: string
}

function Button({ label, onClick, color, background }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} style={{ color, background }}>
      {label}
    </button>
  )
}

export default Button
