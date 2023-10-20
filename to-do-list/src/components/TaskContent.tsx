import styles from './TaskContent.module.css'
import { PlusCircle } from '../../node_modules/@phosphor-icons/react/dist/index'

import { CheckTask } from './checkTask'
import { VoidTask } from './VoidTask'

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'

export interface TaskProps {
    id: string
    taskContent: string
    taskIsComplete: boolean
}

export function TaskContent() {
    const [tasks, setTasks] = useState<TaskProps[]>(() => {
        const storageTasks = localStorage.getItem('@ToDoList:tasks')

        if ( storageTasks) {
            return JSON.parse(storageTasks)
        }

        return []
    })
    return (
        <div className={styles.content}>
            <form>
                


            </form>
        </div>
    )
}