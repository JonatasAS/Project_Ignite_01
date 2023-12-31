import styles from './Header.module.css'
import rocketLogo from '../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.rocket}
        src={rocketLogo}
        alt="Um fogue azul decolando"
      />
      <h1>
        <span>to</span>
        <span>.</span>
        <span>do</span>
      </h1>
    </header>
  )
}
