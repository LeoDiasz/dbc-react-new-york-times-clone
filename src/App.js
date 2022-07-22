import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import {Header} from "./components/Header/Header"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/'>Home</Route>
          <Route path='/health'>Health</Route>
          <Route path='/science'>Science</Route>
          <Route path='/technology'>Technology</Route>
          <Route path='/world'>World</Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
