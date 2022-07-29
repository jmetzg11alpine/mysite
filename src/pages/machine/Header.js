import { Routes, Route, Link } from 'react-router-dom'
import States from './States'
import QnA from './QnA'
import Image from './Image'

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <Link to='stats'>50 States</Link>|
        <Link to='qna'>Question and Answer</Link>|
        <Link to='image'>Image Recognition</Link>
      </div>
      <Routes>
        <Route path='stats' element={<States />} />
        <Route path='qna' element={<QnA />} />
        <Route path='image' element={<Image />} />
      </Routes>
    </div>
  )
}

export default Header
