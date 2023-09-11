import styles from "./App.module.css";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
      <Header />
        <main>
          <div className={styles.task}>
            <input type="text" />
            <button> teste</button>
            <div className={styles.taskList}>
              <p>texto</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
