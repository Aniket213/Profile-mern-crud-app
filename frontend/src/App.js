import './App.css';
import { Nav } from './components/Nav';
import { All } from './components/All';
import { Add } from './components/Add';
import { Edit } from './components/Edit';
import { Expand } from './components/Expand';
import { About } from './components/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const modeclicked = ()=>{
    const app = document.querySelector('.app');
    if(app.classList.contains('darkmode')){
      app.classList.remove('darkmode');
      app.classList.add('lightmode');
    }else{
      app.classList.remove('lightmode');
      app.classList.add('darkmode');
    }
  }

  return (
    <div className="app darkmode">
      <BrowserRouter>
        <Nav modeclicked = {modeclicked}/>
        <Routes>
          <Route path='/' element={<All/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          <Route path='/expand/:id' element={<Expand/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
