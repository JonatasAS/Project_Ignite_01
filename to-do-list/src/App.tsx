import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { Content } from "./components/Content";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
    </div>
  );
}
