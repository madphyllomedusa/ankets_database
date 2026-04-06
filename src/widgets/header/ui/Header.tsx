import { Dropdown } from '@shared/ui'
import styles from './Header.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState } from '@app/store'
import { logout } from '@features/auth/authSlice'

function Header() {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('user')
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__right}>
        <Dropdown
          trigger={(toggle) => (
            <button className={styles.header__user} onClick={toggle}>
              {user && (
                <span className={styles.header__name}>
                  {user.name} {user.lastname}
                </span>
              )}
              <span className={styles.header__avatar} />
            </button>
          )}
          items={[{ label: 'Выйти из аккаунта', onClick: handleLogout, danger: true }]}
        />
      </div>
    </header>
  )
}

export default Header
