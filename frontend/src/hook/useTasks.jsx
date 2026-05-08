import { useState, useEffect } from 'react'
import {useSearchParams} from 'react-router'

export function useTasks() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams, setsearchParams] = useSearchParams()

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await fetch(`${API_URL}/tasks`)
                const data = await response.json()
                setTasks(data)
            } catch (error) {
                console.error('Error fetching tasks:', error)
            } finally {
                setLoading(false)       
        }
        }
        fetchTasks()
    }, [API_URL])

    const query = searchParams.get('q')?.toLowerCase() || ''

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(query) ||
        task.description?.toLowerCase().includes(query)
    )

    return {
        tasks,
        filteredTasks,
        loading,
        setTasks
    }
}

