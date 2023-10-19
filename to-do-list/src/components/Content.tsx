import { Button } from './Button'
import { Input } from './Input'
import styles from './Content.module.css'
import { PlusCircle } from '../../node_modules/@phosphor-icons/react/dist/index'



export function Content() {
    return (
        <div className={styles.content}>
            <form>
              <Input />
              <Button >
              
              </Button>

            </form>
        </div>
    )
}