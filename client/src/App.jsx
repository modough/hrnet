import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeesList from './pages/EmployeesList'
import Header from './components/Header'
import ErrorPage from './pages/error/ErrorPage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<CreateEmployee />} />
        <Route path='/employees' element={<EmployeesList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </Router>
  )
}
export default App
