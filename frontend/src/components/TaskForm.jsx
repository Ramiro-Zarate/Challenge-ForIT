import styles from './TaskForm.module.css'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router'
import { set } from 'zod'

export function TaskForm() {
    const { id } = useParams()
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const API_URL = import.meta.env.VITE_API_URL

    const isEditing = Boolean(id)

    useEffect(() => {
        if (isEditing) {
            setLoading(true)
            fetch(`${API_URL}/tasks/${id}`)
                .then(response => response.json())
                .then(data => setTask(data))
                .catch(error => console.error('Error fetching tarea:', error))
        }
        }, [id, isEditing, API_URL])

    
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const method = isEditing ? 'PUT' : 'POST'
        const url = isEditing ? `${API_URL}/tasks/${id}` : `${API_URL}/tasks`

        try {
            const response = await fetch(url, {
                method,
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            })
            if (response.ok) {
                navigate('/')
            }   else {
                console.error('Error:', response.statusText)
            }
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className={styles.taskFormSection}>
            <h2>{isEditing ? 'Editar Tarea' : 'Crear Tarea'}</h2>
            <form onSubmit={handleSubmit} className={styles.taskForm}>
                <div className={styles.formTitle}>
                    <label>Título: </label>
                    <input className={styles.formInput}
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                        placeholder='Ejemplo: Darle de comer al perro'
                    />
                </div>
                <div className={styles.formDescription}> 
                    <label>Descripción: </label>
                    <textarea className={styles.formInput}
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        placeholder='(Opcional)'
                    />
                </div>
                <div className={styles.formActions}>
                    <button type="submit" className={styles.formButton}>
                        {isEditing ? 'Editar' : 'Crear'}
                    </button>
                    <button type="button" onClick={() => navigate('/')} className={styles.formButton}>
                        Cancelar
                    </button>
                </div>
                
            </form>
        </section>
    )
}