import { useEffect, useState } from 'react'
import styles from './Group.module.scss'
import { FolderItem, folderApi } from '../../folder'
import FolderModal from '../../folder/ui/FolderModal'
import type { Folder } from '../../folder'

interface GroupProps {
  id: number
  name: string
}

function Group({ id, name }: GroupProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [folders, setFolders] = useState<Folder[]>([])
  const [openFolder, setOpenFolder] = useState<Folder | null>(null)

  useEffect(() => {
    folderApi.getByGroup(id).then(setFolders)
  }, [id])

  function handleRename(folderId: number, newName: string) {
    folderApi.rename(folderId, newName).then(updated =>
      setFolders(prev => prev.map(f => f.id === folderId ? updated : f))
    )
  }

  function handleDelete(folderId: number) {
    folderApi.delete(folderId).then(() =>
      setFolders(prev => prev.filter(f => f.id !== folderId))
    )
  }

  return (
    <div className={styles.group}>
      <button className={styles.group__header} onClick={() => setIsOpen(prev => !prev)}>
        <span className={`${styles.group__arrow} ${isOpen ? styles['group__arrow--open'] : ''}`}>▶</span>
        {name}
      </button>
      {isOpen && (
        <ul className={styles.group__list}>
          {folders.map((folder) => (
            <li key={folder.id}>
              <FolderItem
                name={folder.name}
                onRename={(newName) => handleRename(folder.id, newName)}
                onDelete={() => handleDelete(folder.id)}
                onOpen={() => setOpenFolder(folder)}
              />
            </li>
          ))}
        </ul>
      )}

      {openFolder && (
        <FolderModal
          folder={openFolder}
          groupName={name}
          folders={folders}
          onClose={() => setOpenFolder(null)}
          onSelectFolder={setOpenFolder}
        />
      )}
    </div>
  )
}

export default Group
