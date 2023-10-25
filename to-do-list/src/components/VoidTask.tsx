import { ClipboardText } from '@phosphor-icons/react'
import styles from './Void.module.css'

export function VoidTask() {
  return (
    <div className={styles.taskVoid}>
      <ClipboardText size={40} />
      <p>Você não tem tarefas</p>
      <span>Adicione um tarefa! </span>
    </div>
  )
}
