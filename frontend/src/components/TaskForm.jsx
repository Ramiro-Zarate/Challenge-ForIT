import styles from './TaskForm.module.css'
import {useState} from 'react'
import { useNavigate } from 'react-router'

export function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const API_URL = import.meta.env.VITE_API_URL

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            })
            if (response.ok) {
                navigate('/')
            }   else {
                console.error('Error creating task:', response.statusText)
            }
        } catch (error) {
            console.error('Error creating task:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className={styles.taskFormSection}>
            <h2>Agrega una nueva tarea</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                        placeholder='Ejemplo: Darle de comer al perro'
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        placeholder='(Opcional)'
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Creando...' : 'Crear Tarea'}
                </button>
                <button type="button" onClick={() => navigate('/')}>
                    Cancelar
                </button>
            </form>
        </section>
    )
}