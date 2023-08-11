import pc from '../image/bureau.jpg'
import prog from '../image/programmer.png';
import '../styles/AboutMe.css'

const myText = "Hello there! I'm Adam, and I'm thrilled to welcome you to my portfolio. As a dedicated and aspiring Junior Front-End Developer, I have a strong foundation in HTML, CSS, JavaScript, and React. I quickly immersed myself in the realm of coding, eagerly learning the intricacies of HTML and CSS to design captivating layouts and styles. As I ventured further, JavaScript became my playground for interactive elements, allowing me to breathe life into static pages and foster engaging user interactions. My proficiency in React, enables me to build dynamic and responsive interfaces that adapt seamlessly across devices. I am particularly drawn to the way React component-based architecture empowers me to create modular and scalable applications, making it an indispensable tool in my developer toolkit."

function AboutMe(){
  return (
    <div id="aboutMe">
      <div className='imgDiv'>
        <img className='desktopPic' src={pc} alt='desktop'/>
        <img className='progPic' src={prog} alt='programmer'/>
      </div>
      <div className='textDiv'>
        <h2>ABOUT ME</h2>
        <h3>A dedicated Front-end Developer</h3>
        <p>{myText}</p>
      </div>
    </div>
  );
}

export default AboutMe;