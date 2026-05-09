import { Link } from 'react-router'
import { useState } from 'react'
import styles from './TaskItem.module.css'

export function TaskItem({ task, onDelete }) {
    const [isCompleted, setIsCompleted] = useState(false)

    const handleToggle = () => {
        setIsCompleted(!isCompleted)
    }

    return (
        <>
            <div className={styles.task} key={task.id} task={task}>
                <div className={styles.taskText}>
                    <h3 className={styles.taskTitle}>{task.title}</h3>
                    <p className={styles.taskDescription}>{task.description}</p>
                </div>
                <div className={styles.taskActions}>
                    <button
                        onClick={handleToggle}
                        className={`${styles.completeButton} ${isCompleted ? styles.completed : ''}`}
                    >
                        {isCompleted ? 'Completada!' : 'Completar'}
                    </button>
                    <Link className={styles.taskLink} to={`/edit/${task.id}`}>Editar</Link>
                    <Link className={styles.taskLink} to={`/tasks/${task.id}`}>Ver Mas</Link>
                    <button className={styles.trashButton} onClick={()=> onDelete(task.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
                </div>
            </div>
        </>
    )
}