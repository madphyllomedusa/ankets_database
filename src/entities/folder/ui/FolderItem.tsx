import { useState, useEffect } from 'react'
import folderIcon from '@assets/folder.png'
import editIcon from '@assets/edit.png'
import { Dropdown, Input } from '@shared/ui'
import styles from './FolderItem.module.scss'

interface FolderItemProps {
  name: string
  onRename: (newName: string) => void
  onDelete: () => void
  onOpen?: () => void
  active?: boolean
}

function FolderItem({ name, onRename, onDelete, onOpen, active }: FolderItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(name)
  useEffect(() => {
    setValue(name)
  }, [name])

  function handleConfirm() {
    setIsEditing(false)
    if (value.trim() && value !== name) onRename(value.trim())
    else setValue(name)
  }

  return (
    <div className={styles.item}>
      <img src={folderIcon} alt="folder" width={50} height={35} onClick={!isEditing ? onOpen : undefined} style={{ cursor: onOpen && !isEditing ? 'pointer' : 'default' }} />
      {isEditing ? (
        <Input
          autoFocus
          value={value}
          onChange={setValue}
          onBlur={handleConfirm}
          onKeyDown={e => e.key === 'Enter' && handleConfirm()}
        />
      ) : (
        <span className={styles.name} onClick={onOpen} style={{ cursor: onOpen ? 'pointer' : 'default' }}>{value}</span>
      )}
      <button className={styles.edit} onClick={() => setIsEditing(true)}>
        <img src={editIcon} alt="edit" width={16} height={16} />
      </button>
      <Dropdown
        trigger={(toggle) => (
          <button className={styles.dots} onClick={toggle}>⋮</button>
        )}
        items={[{ label: 'Удалить', onClick: onDelete, danger: true }]}
      />
    </div>
  )
}

export default FolderItem
