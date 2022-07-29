import { Routes, Route } from 'react-router-dom'
import './machine.css'
import Home from './Home'
import Header from './Header'

const Info = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </div>
  )
}
export default Info
