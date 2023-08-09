import {AiFillLinkedin, AiFillGithub, AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJavascript, BiLogoReact} from 'react-icons/bi'
import face from '../image/mypic.jpg'
import '../styles/Home.css'

function Home(){
  return (
    <div id="home">
      <div className='intro'>
        <div className='textIntro'>
          <h1>Front-End<br/> Developer</h1>
          <p className='textIntrop'>Hi, I'm Adam Idouissaaden.<br/> A passionate Front-end  Developer.<br/> Based in Morocco, Casablanca.</p>
          <a href='https://www.linkedin.com/in/adam-idouissaaden-4b2223155/' target='_blank' rel='noopener noreferrer'><AiFillLinkedin size="25px" /></a>
          <a href='https://github.com/Blackyknight' target='_blank' rel='noopener noreferrer'><AiFillGithub size='25px' /></a>
        </div>
        <img src={face} alt='face pic'/>
      </div>
      <div className='techStack'>
        <h4>Tech Stack</h4>
        <hr/>
        <span><AiFillHtml5 size='25px' color='#f06529' /></span>
        <span className='cssJavaReact'><BiLogoCss3 size='28px' color='#264de4'/></span>
        <span className='cssJavaReact'><BiLogoJavascript size='28px' color='#F0DB4F'/></span>
        <span className='cssJavaReact'><BiLogoReact size='28px' color='#61DBFB'/></span>
      </div>
    </div>
  );
}

export default Home;