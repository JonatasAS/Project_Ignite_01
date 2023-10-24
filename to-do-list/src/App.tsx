import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { TaskContent } from './components/TaskContent'

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <TaskContent />
    </div>
  )
}
