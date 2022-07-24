import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Health } from './pages/Health/Health';
import { Home } from './pages/Home/Home';
import { Notice } from './pages/Notice/Notice';
import { Politics } from './pages/Politics/Politics';
import { Science } from './pages/Science/Science';
import { Technology } from './pages/Technology/Technology';
import { World } from './pages/World/World';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/health' element={<Health/>}></Route>
          <Route path='/science' element={<Science/>}></Route>
          <Route path='/technology' element={<Technology/>}></Route>
          <Route path='/world' element={<World/>}></Route>
          <Route path='/politics' element={<Politics/>}></Route>
          <Route path='/notice' element={<Notice/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
