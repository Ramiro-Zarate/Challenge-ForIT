import { useParams, Link } from 'react-router'
import { useState, useEffect } from 'react'

export function TaskDetail() {
    const { id } = useParams()
    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState(true)

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`http://localhost:3000/tasks/${id}`)
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
        <section>
            <Link to="/">Volver a la lista de tareas</Link>
            <article>
                <h2>{task.title}</h2>
                <p>Descripcion: {task.description}</p>
                <footer>
                    <p>ID: {task.id}</p>
                </footer>
            </article>
            
            
        </section>
    )
}