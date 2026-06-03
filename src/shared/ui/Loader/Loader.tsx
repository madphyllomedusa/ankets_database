import styles from './Loader.module.scss'

interface Props {
  fullPage?: boolean
}

function Loader({ fullPage = false }: Props) {
  return (
    <div className={`${styles.wrapper} ${fullPage ? styles.fullPage : ''}`}>
      <div className={styles.spinner} />
    </div>
  )
}

export default Loader
