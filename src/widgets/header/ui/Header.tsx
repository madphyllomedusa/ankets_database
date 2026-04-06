import { Dropdown } from '../../../shared/ui'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__right}>
        <Dropdown
          trigger={(toggle) => (
            <button className={styles.header__avatar} onClick={toggle} />
          )}
          items={[{ label: 'Выйти из аккаунта', onClick: () => {}, danger: true }]}
        />
      </div>
    </header>
  )
}

export default Header
