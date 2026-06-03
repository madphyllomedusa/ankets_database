import { useEffect, useState } from 'react'
import styles from './Group.module.scss'
import { FolderItem, folderApi } from '../../folder'
import FolderModal from '../../folder/ui/FolderModal'
import type { Folder } from '../../folder'
import { Modal, Input, Loader } from '@shared/ui'
import { useToast } from '@shared/model/toastContext'

interface GroupProps {
  id: string
  name: string
}

function Group({ id, name }: GroupProps) {
  const { showToast } = useToast()
  const [isOpen, setIsOpen] = useState(true)
  const [folders, setFolders] = useState<Folder[]>([])
  const [loadingFolders, setLoadingFolders] = useState(true)
  const [openFolder, setOpenFolder] = useState<Folder | null>(null)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')

  useEffect(() => {
    folderApi.getByGroup(id).then(setFolders).finally(() => setLoadingFolders(false))
  }, [id])

  async function handleRename(folderId: string, newName: string) {
    try {
      const updated = await folderApi.rename(folderId, newName)
      setFolders(prev => prev.map(f => f.id === folderId ? updated : f))
      showToast('Папка переименована')
    } catch {
      showToast('Не удалось переименовать папку', 'error')
    }
  }

  async function handleDelete(folderId: string) {
    try {
      await folderApi.delete(folderId)
      setFolders(prev => prev.filter(f => f.id !== folderId))
      showToast('Папка удалена')
    } catch {
      showToast('Не удалось удалить папку', 'error')
    }
  }

  async function handleCreate() {
    if (!newFolderName.trim()) return
    try {
      const created = await folderApi.create(newFolderName.trim(), id)
      setFolders(prev => [...prev, created])
      setNewFolderName('')
      setIsCreateOpen(false)
      showToast('Папка создана')
    } catch {
      showToast('Не удалось создать папку', 'error')
    }
  }

  return (
    <div className={styles.group}>
      <button className={styles.group__header} onClick={() => setIsOpen(prev => !prev)}>
        <span className={`${styles.group__arrow} ${isOpen ? styles['group__arrow--open'] : ''}`}>▶</span>
        {name}
      </button>

      {isOpen && (
        loadingFolders ? <Loader /> :
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
          <li>
            <button
              className={styles.group__add}
              onClick={() => setIsCreateOpen(true)}
              title="Новая папка"
            >
              <svg width="50" height="35" viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 10V25M17.5 17.5H32.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Создать папку
            </button>
          </li>
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

      <Modal
        isOpen={isCreateOpen}
        onClose={() => { setIsCreateOpen(false); setNewFolderName('') }}
        title="Новая папка"
        onConfirm={handleCreate}
      >
        <Input
          label="Название"
          value={newFolderName}
          onChange={setNewFolderName}
          placeholder="Введите название папки"
        />
      </Modal>
    </div>
  )
}

export default Group
