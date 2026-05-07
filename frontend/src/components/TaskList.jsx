import styles from './TaskList.module.css'
// Muestra la lista de tareas
export function TaskList() {
    return (
        <>
        <section className={styles.taskListSection}>
            <div>
                <form role='search' className={styles.searchForm}>
                <input 
                    className={styles.searchInput}
                    type="text" 
                    placeholder="Buscar tarea" 
                />
            </form>
            </div>
            <div>

            </div>
        </section>
        </>
    )
}