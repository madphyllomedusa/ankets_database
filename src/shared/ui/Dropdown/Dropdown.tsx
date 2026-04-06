import { useState, useRef, useEffect } from 'react'
import styles from './Dropdown.module.scss'

interface DropdownItem {
  label: string
  onClick: () => void
  danger?: boolean
}

interface DropdownProps {
  trigger: (toggle: () => void) => React.ReactNode
  items: DropdownItem[]
}

function Dropdown({ trigger, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={styles.dropdown} ref={ref}>
      {trigger(() => setIsOpen(prev => !prev))}
      {isOpen && (
        <div className={styles.dropdown__menu}>
          {items.map((item) => (
            <button
              key={item.label}
              className={`${styles.dropdown__item} ${item.danger ? styles['dropdown__item--danger'] : ''}`}
              onClick={() => { item.onClick(); setIsOpen(false) }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
