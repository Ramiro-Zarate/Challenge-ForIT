import { Link } from 'react-router'
import styles from './TaskItem.module.css'

export function TaskItem({ task }) {
    return (
        <>
            <div className={styles.task} key={task.id} task={task}>
                            <div className={styles.taskText}>
                                <h3 className={styles.taskTitle}>{task.title}</h3>
                                <p className={styles.taskDescription}>{task.description}</p>
                            </div>
                            <div className={styles.taskActions}>
                                <button>Completada</button>
                                <Link to={`/tasks/${task.id}`}><button>Ver Mas</button></Link>
                            </div>
                        </div>
        </>
    )
}