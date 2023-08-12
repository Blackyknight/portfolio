import '../styles/Nav.css'
import {HashLink as Link} from 'react-router-hash-link'

function Nav(){
  return (
    <div className='nav'>
      <h1 className='nav'>Adam.dev</h1>
      <ul className='nav'>
        <Link to='#home' smooth><li className='nav' key='home'>Home</li></Link>
        <Link to="#aboutMe" smooth><li className='nav' key='about'>About</li></Link>
        <Link to="#portfolio" smooth><li className='nav' key='projects'>Projects</li></Link>
        <li className='nav' key='contact'>Contact</li>
      </ul>
    </div>
  );
}
export default Nav;