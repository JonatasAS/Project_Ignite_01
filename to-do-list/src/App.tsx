import styles from "./App.module.css";
import { Header } from "./components/Header";
import "./global.css";

export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
      <Header />
        <main>
          <div>
            
          </div>
        </main>
      </div>
    </div>
  );
}
