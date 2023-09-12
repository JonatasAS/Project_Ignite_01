import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";

export function App() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <main>
          <Input/>
          <button>teste</button>
        </main>
      </div>
    </div>
  );
}
