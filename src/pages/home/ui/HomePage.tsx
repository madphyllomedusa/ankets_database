import { useEffect, useState } from 'react'
import { groupApi, GroupItem } from '../../../entities/group'
import type { Group } from '../../../entities/group'
import { Button, Input, Modal } from '../../../shared/ui'
import styles from './HomePage.module.scss'

function HomePage() {
  const [groups, setGroups] = useState<Group[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')

  useEffect(() => {
    groupApi.getAll().then(setGroups)
  }, [])

  function handleCreate() {
    if (!newGroupName.trim()) return
    groupApi.create(newGroupName.trim()).then(created => {
      setGroups(prev => [...prev, created])
      setNewGroupName('')
      setIsModalOpen(false)
    })
  }

  return (
    <div className={styles.page}>
      {groups.map((group) => (
        <GroupItem key={group.id} id={group.id} name={group.name} />
      ))}
      <div className={styles.page__newGroup}>
        <Button label="Новая группа" onClick={() => setIsModalOpen(true)} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setNewGroupName('') }}
        title="Новая группа"
        onConfirm={handleCreate}
      >
        <Input
          label="Название"
          value={newGroupName}
          onChange={setNewGroupName}
          placeholder="Введите название группы"
        />
      </Modal>
    </div>
  )
}

export default HomePage
