import styles from './TaskForm.module.css'
// Muestra cada tarea individualmente
export function TaskItem() {
    return (
        <>
            <form role='search'>
                <input 
                    className={styles.searchInput}
                    type="text" 
                    placeholder="Buscar tarea" 
                />
            </form>
        </>
    )
}