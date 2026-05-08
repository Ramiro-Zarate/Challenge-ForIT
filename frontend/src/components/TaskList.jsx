import styles from './TaskList.module.css'
import { useTasks } from '../hook/useTasks'

export function TaskList() {
    const { filteredTasks, loading } = useTasks()

    if (loading) {
        return <p>Cargando tareas...</p>
    }

    return (
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
            {filteredTasks.length === 0 ? (
                <p>No se encontraron tareas.</p>
            ) : (
                <div className={styles.taskList}>
                    {filteredTasks.map(task => (
                        <div className={styles.task} key={task.id} task={task}>
                            <h3 className={styles.taskTitle}>{task.title}</h3>
                            <p className={styles.taskDescription}>{task.description}</p>
                        </div>
                    ))}      
                </div>
            )}
            
        </section>
    )
}