import styles from './TaskContent.module.css'
import { PlusCircle } from '../../node_modules/@phosphor-icons/react/dist/index'

import { CheckTask } from './CheckTask'
import { VoidTask } from './VoidTask'

import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

export interface TaskProps {
  id: string
  taskContent: string
  taskIsComplete: boolean
}

export function TaskContent() {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const storageTasks = localStorage.getItem('@ToDoList:tasks')

    if (storageTasks) {
      return JSON.parse(storageTasks)
    }

    return []
  })

  const [newTask, setNewTask] = useState('')
  const isNewTaskEmpty = newTask.length === 0

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!newTask.trim()) {
      return alert('Por favor, informe um nome válido para a tarefa!')
    } else {
      const newCreatedTask: TaskProps = {
        id: uuidv4(),
        taskContent: newTask,
        taskIsComplete: false,
      }

      setTasks([...tasks, newCreatedTask])
      setNewTask('')
    }
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')

    setNewTask(event.target.value)
  }

  function handleDeleteTask(id: string) {
    if (confirm('Tem certeza que deseja remover a tarefa?') === true) {
      const filteredTasks = tasks.filter((task) => task.id !== id)
      setTasks(filteredTasks)
    }
  }

  function handleToggleTask(id: string) {
    const updatedTask = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            taskIsComplete: !task.taskIsComplete,
          }
        : task,
    )

    setTasks(updatedTask)
  }

  const completedTasks = `${
    tasks.filter((task) => task.taskIsComplete).length
  } de ${tasks.length}`

  useEffect(() => {
    localStorage.setItem('@ToDoList:tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className={styles.content}>
      <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
        <input
          className={styles.taskInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          required
        />

        <button
          className={styles.taskButton}
          type="submit"
          disabled={isNewTaskEmpty}
        >
          Criar <PlusCircle size={21} />
        </button>
      </form>

      <section>
        <div className={styles.taskCounter}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Concluídas <span>{tasks.length === 0 ? 0 : completedTasks}</span>
          </p>
        </div>
      </section>

      {tasks.length === 0 ? (
        <VoidTask />
      ) : (
        <div>
          {tasks.map((task) => {
            return (
              <CheckTask
                key={task.id}
                task={task}
                handleDeleteTask={() => handleDeleteTask(task.id)}
                handleToggleTask={() => handleToggleTask(task.id)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
