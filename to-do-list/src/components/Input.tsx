import styles from './Input.module.css';

interface inputProps {
    title: string;
}

export function Input({title}: inputProps) {
    return(
        <input className={styles.inputTaks} type="text" title={title} placeholder="Adicione uma nova tarefa"/>
    );
}