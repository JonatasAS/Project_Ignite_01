import styles from './Task.module.css'

export function Tasks() {
    return (
        <div className={styles.wrapperTask}>
            <div className={styles.task}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ab magni quaerat eum
                    voluptates consequatur nostrum ea error excepturi quidem inventore velit laudantium corporis
                    modi, alias sapiente optio unde at!
                </p>
            </div>
        </div>
    )
}