import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/'>Home</Route>
          <Route path='/health'>Health</Route>
          <Route path='/science'>Science</Route>
          <Route path='/technology'>Technology</Route>
          <Route path='/world'>World</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
