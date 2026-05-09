import styles from './TaskList.module.css'
import { useTasks } from '../hook/useTasks'
import { Link } from 'react-router'
import { TaskItem } from './TaskItem'

export function TaskList() {
    const { filteredTasks, loading, deleteTask } = useTasks()

    if (loading) {
        return <p>Cargando tareas...</p>
    }

    return (
        <section className={styles.taskListSection}>
            <div>
                <Link to="/add" className={styles.addButton}>Agregar tarea</Link>
            </div>
            {filteredTasks.length === 0 ? (
                <p>No se encontraron tareas.</p>
            ) : (
                <div className={styles.taskList}>
                    {filteredTasks.map(task => (
                        <TaskItem 
                        key={task.id} 
                        task={task} 
                        onDelete={deleteTask} />
                    ))}      
                </div>
            )}
            
        </section>
    )
}