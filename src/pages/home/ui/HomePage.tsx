import { CsvTransferPanel } from '@features/csvTransfer'
import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <div className={styles.page}>
      <CsvTransferPanel />
    </div>
  )
}

export default HomePage
