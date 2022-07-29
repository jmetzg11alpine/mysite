import { Link, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import WorldIndex from './WorldIndex'

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <Link to='portfolio'>My Portfolio</Link>|
        <Link to='world'>World Indexes</Link>
      </div>
      <Routes>
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='world' element={<WorldIndex />} />
      </Routes>
    </div>
  )
}

export default Header
