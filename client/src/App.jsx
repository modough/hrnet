import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const Header = lazy(() => import('./components/Header'));
  const ErrorPage = lazy(() => import('./pages/error/ErrorPage'));
  const EmployeesList = lazy(() => import('./pages/EmployeesList'));
  const CreateEmployee = lazy(() => import('./pages/CreateEmployee'));
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path='/' element={<CreateEmployee />} />
          <Route path='/employees' element={<EmployeesList />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
export default App
