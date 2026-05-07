let tasks = [
    {
        id: '1',
        title: 'task de prueba',
        description: 'esta es una tarea de prueba',
        completed: false,
        createdAt: new Date()
    }
]

export class TaskModel {
    static async getAll() {
        return tasks
    }

    static async getById({id}) {
        return tasks.find(task => task.id === id)
    }

    static async create({input}) {
        const newTask = {
            id: crypto.randomUUID(),
            title: input.title,
            description: input.description,
            completed: false,
            createdAt: new Date()
        }

        tasks.push(newTask)
        return newTask
    }

    static async delete({id}) {
        const index = tasks.findIndex(task => task.id === id)
        if (index === -1) return false

        tasks.splice(index, 1)
        return true
    }

    static async update({ id, input }) {
    const taskIndex = tasks.findIndex(task => task.id === id)
    if (taskIndex === -1) return false

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...input
    };

    return tasks[taskIndex]
  }
}