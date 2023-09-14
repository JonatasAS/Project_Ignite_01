import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <form action="">

          <Input />
          <Button title="Criar"/>
        </form>

      </div>
    </div>
  );
}
