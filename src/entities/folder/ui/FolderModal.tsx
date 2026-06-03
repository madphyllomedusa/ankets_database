import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './FolderModal.module.scss'
import folderIcon from '@assets/folder.png'
import type { Folder } from '@entities/folder/model/types'
import { anketApi } from '@entities/anket'
import type { Anket } from '@entities/anket'
import { useToast } from '@shared/model/toastContext'
import { Loader } from '@shared/ui'

interface FolderModalProps {
  folder: Folder
  groupName: string
  folders: Folder[]
  onClose: () => void
  onSelectFolder: (folder: Folder) => void
}

function FolderModal({ folder, groupName, folders, onClose, onSelectFolder }: FolderModalProps) {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [ankets, setAnkets] = useState<Anket[]>([])
  const [loadingAnkets, setLoadingAnkets] = useState(true)

  const handleClick = (anketId: string) => {
    navigate(`/anket/${anketId}`)
  }

  useEffect(() => {
    setLoadingAnkets(true)
    anketApi.getByFolder(folder.id).then(setAnkets).finally(() => setLoadingAnkets(false))
  }, [folder.id])

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        <div className={styles.sidebar}>
          <p className={styles.sidebar__group}>
            <img src={folderIcon} alt="" width={18} height={14} />
            {groupName}
          </p>
          <ul className={styles.sidebar__list}>
            {folders.map(f => (
              <li
                key={f.id}
                className={`${styles.sidebar__item} ${f.id === folder.id ? styles['sidebar__item--active'] : ''}`}
                onClick={() => onSelectFolder(f)}
              >
                {f.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.content}>
          <button className={styles.close} onClick={onClose}>✕</button>
          <nav className={styles.breadcrumbs}>
            <span className={styles.breadcrumbs__group}>{groupName}</span>
            <span className={styles.breadcrumbs__sep}>/</span>
            <span className={styles.breadcrumbs__folder}>{folder.name}</span>
          </nav>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{folder.name}</h2>
            <button
              className={styles.createBtn}
              onClick={() => navigate(`/create-anket/${folder.id}`)}
            >
              + Создать анкету
            </button>
          </div>

          {loadingAnkets ? (
            <Loader />
          ) : ankets.length > 0 ? (
            <ul className={styles.ankets}>
              {ankets.map(anket => (
                <li key={anket.id} className={styles.anket}>
                  <span className={styles.anketName} onClick={() => handleClick(anket.id)}>
                    {anket.name}
                  </span>
                  <button
                    className={styles.deleteAnketBtn}
                    onClick={async e => {
                      e.stopPropagation()
                      try {
                        await anketApi.delete(anket.id)
                        setAnkets(prev => prev.filter(a => a.id !== anket.id))
                        showToast('Анкета удалена')
                      } catch {
                        showToast('Не удалось удалить анкету', 'error')
                      }
                    }}
                    title="Удалить анкету"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>Нет анкет</p>
          )}
        </div>

      </div>
    </div>
  )
}

export default FolderModal
