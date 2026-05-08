import {Routes, Route} from 'react-router'
import { Header } from './components/Header'
import {TaskList} from './components/TaskList'
import {TaskItem} from './components/TaskItem'
import {TaskForm} from './components/TaskForm'
import { TaskDetail } from './components/TaskDetail'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<TaskList />} />
      <Route path='/tasks/:id' element={<TaskDetail />} />
      <Route path='/add' element={<TaskForm />} />
      <Route path='/edit/:id' element={<TaskForm />} />
    </Routes>
    </>
  )
}

export default App
