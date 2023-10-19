import styles from './Input.module.css';

interface InputProps {
    newTask: string
}

export function Input({newTask}: InputProps) {
    return(
        <input 
        className={styles.inputTaks} 
        type="text" 
        value={newTask} 
        required 
        placeholder="Adicione uma nova tarefa"/>
    );
}