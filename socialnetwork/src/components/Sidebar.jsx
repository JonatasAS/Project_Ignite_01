import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/JonatasAS.png" alt="" />

        <strong>Jonatas Amorim</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} />Editar seu perfil</a>
      </footer>
    </aside>

  );
}