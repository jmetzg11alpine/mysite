import { Routes, Route } from 'react-router-dom'
import './financial.css'
import Header from './Header'
import Home from './Home'

const Financial = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </div>
  )
}
export default Financial
