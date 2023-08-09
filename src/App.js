import Nav from './component/Nav.js'
import Home from './component/Home.js'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
