import { Routes, Route, Link } from 'react-router-dom'
import Bio from './Bio'
import Quizes from './Quizes'
import Contact from './Contact'

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <Link to='quizes'>Quizes</Link>|<Link to='contact'>Contact</Link>|
        <Link to='bio'>Bio</Link>
      </div>
      <Routes>
        <Route path='quizes' element={<Quizes />} />
        <Route path='contact' element={<Contact />} />
        <Route path='bio' element={<Bio />} />
      </Routes>
    </div>
  )
}

export default Header
