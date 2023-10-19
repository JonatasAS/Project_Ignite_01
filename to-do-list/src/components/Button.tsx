import styles from './Button.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface ButtonProps {
    title?: string 
}

export function Button({ title }: ButtonProps) {
    return(
       <button className={styles.buttonTask} title={title} type='submit'>
        <span>{title}</span>
        <PlusCircle size={21}/>
       </button>
    );
}