import { useState } from 'react'
import folderIcon from '../../../assets/folder.png'
import styles from './Group.module.scss'

const folders = [
  'Папка 1',
  'Папка 2',
  'Папка 3',
  'Папка 4',
  'Папка 5',
]

function Group({ name }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={styles.group}>
      <button className={styles.group__header} onClick={() => setIsOpen(prev => !prev)}>
        <span className={`${styles.group__arrow} ${isOpen ? styles['group__arrow--open'] : ''}`}>▶</span>
        {name}
      </button>
      {isOpen && (
        <ul className={styles.group__list}>
          {folders.map((folder) => (
            <li key={folder} className={styles.group__item}>
              <img src={folderIcon} alt="folder_png" width={20} height={16} /> {folder}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Group
