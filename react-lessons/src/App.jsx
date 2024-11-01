import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AprendizadosPage from './components/Aprendizados/AprendizadosPage'
import ReactPage from './components/Aprendizados/React/ReactPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='aprendizados'>
              <Route index element={<AprendizadosPage />} />
              <Route path='react' element={<ReactPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
