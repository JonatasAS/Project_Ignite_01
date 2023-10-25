import { Trash } from '@phosphor-icons/react'
import styles from './CheckTask.module.css'

import { TaskProps } from './TaskContent'

interface Task {
  task: TaskProps
  handleDeleteTask: () => void
  handleToggleTask: () => void
}

export function CheckTask({ task, handleDeleteTask, handleToggleTask }: Task) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.container}>
        <input
          type="checkbox"
          defaultChecked={task.taskIsComplete}
          onClick={handleToggleTask}
        />
        <span className={styles.check}></span>
      </label>

      <p className={task.taskIsComplete ? styles.taskIsComplete : ''}>
        {' '}
        {task.taskContent}
      </p>

      <button>
        <Trash size={21} onClick={handleDeleteTask} />
      </button>
    </div>
  )
}
