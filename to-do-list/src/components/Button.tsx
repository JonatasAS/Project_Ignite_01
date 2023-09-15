import styles from './Button.module.css'
import plus from '../assets/plus.svg'

interface ButtonProps {
    title?: string
}

export function Button({ title }: ButtonProps) {
    return(
       <button className={styles.buttonTask} title={title}>
        <span>{title}</span>
        <img src={plus} alt="" />
       </button>
    );
}