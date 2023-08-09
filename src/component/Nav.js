import '../styles/Nav.css'
import {HashLink as Link} from 'react-router-hash-link'

function Nav(){
  return (
    <div className='nav'>
      <h1 className='nav'>Adam.dev</h1>
      <ul className='nav'>
        <Link to='#home' smooth><li className='nav'>Home</li></Link>
        <li className='nav'>About</li>
        <li className='nav'>Projects</li>
        <li className='nav'>Contact</li>
      </ul>
    </div>
  );
}
export default Nav;