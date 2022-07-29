import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>Home</Link>|<Link to='/machine'>Machine Learning</Link>|
      <Link to='/financial'>Financial</Link>|
      <Link to='/projects'>Projects</Link>|<Link to='/info'>Info</Link>
    </div>
  )
}
export default Header
