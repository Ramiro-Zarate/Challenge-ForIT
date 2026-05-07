import {Routes, Route} from 'react-router'
import { Header } from './components/Header'
import {TaskList} from './components/TaskList'
import {TaskItem} from './components/TaskItem'
import {TaskForm} from './components/TaskForm'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<TaskList />} />
      <Route path='/:id' element={<TaskItem />} />
      <Route path='/add' element={<TaskForm />} />
      <Route path='/edit/:id' element={<TaskForm />} />
    </Routes>
    </>
  )
}

export default App
