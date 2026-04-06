import Group from './Group'
import styles from './HomePage.module.scss'

const groups = [
  'Тестовая группа А',
  'Тестовая группа Б',
  'Тестовая группа В',
]

function HomePage() {
  return (
    <div className={styles.page}>
      {groups.map((group) => (
        <Group key={group} name={group} />
      ))}
    </div>
  )
}

export default HomePage
