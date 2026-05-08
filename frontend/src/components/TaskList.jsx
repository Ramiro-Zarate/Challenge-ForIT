import styles from './TaskList.module.css'
import { useTasks } from '../hook/useTasks'
import { Link } from 'react-router'
import { TaskItem } from './TaskItem'

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
                    <Link to="/add" className={styles.addButton}>Agregar Tarea</Link>
            </div>
            {filteredTasks.length === 0 ? (
                <p>No se encontraron tareas.</p>
            ) : (
                <div className={styles.taskList}>
                    {filteredTasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))}      
                </div>
            )}
            
        </section>
    )
}