import styles from './Input.module.css';

interface InputProps {
    title: string;
}

export function Input({title}: InputProps) {
    return(
        <input className={styles.inputTaks} type="text" title={title} placeholder="Adicione uma nova tarefa"/>
    );
}