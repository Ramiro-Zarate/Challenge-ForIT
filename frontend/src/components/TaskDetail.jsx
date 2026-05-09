import { useParams, Link } from 'react-router'
import { useState, useEffect } from 'react'
import styles from './TaskDetail.module.css'

export function TaskDetail() {
    const { id } = useParams()
    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(true)

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${API_URL}/tasks/${id}`)
        .then(response => response.json())
        .then(data => {
                setTask(data),
                setLoading(false)})
        .catch(error => console.error('Error fetching task:', error))   
    }, [id, API_URL])

    if (loading) {
        return <p>Cargando tarea...</p>
    }

    if (!task) {
        return <p>Tarea no encontrada.</p>
    }

    return (
        <section className={styles.taskDetailSection}>
            <Link className={styles.backButton} to="/">Volver a la lista de tareas</Link>
            <article className={styles.taskDetail}>
                <h2>Título: {task.title}</h2>
                <p>Descripción: {task.description}</p>
                <footer>
                    <p>ID: {task.id}</p>
                </footer>
            </article>
            
            
        </section>
    )
}