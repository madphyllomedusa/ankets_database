import { useEffect, useState } from 'react'
import { groupApi } from '../../../entities/group'
import type { Group } from '../../../entities/group'
import { Button } from '../../../shared/ui'
import GroupItem from './Group'
import styles from './HomePage.module.scss'

function HomePage() {
  const [groups, setGroups] = useState<Group[]>([])

  useEffect(() => {
    groupApi.getAll().then(setGroups)
  }, [])

  return (
    <div className={styles.page}>
      {groups.map((group) => (
        <GroupItem key={group.id} id={group.id} name={group.name} />
      ))}
      <Button label="Новая группа" onClick={() => {}} />
    </div>
  )
}

export default HomePage
