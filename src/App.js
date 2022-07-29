import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Machine from './pages/machine/Machine'
import Financial from './pages/financial/Financial'
import Projects from './pages/projects/Projects'
import Info from './pages/info/Info'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/machine/*' element={<Machine />} />
          <Route path='/financial/*' element={<Financial />} />
          <Route path='/projects/*' element={<Projects />} />
          <Route path='/info/*' element={<Info />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
