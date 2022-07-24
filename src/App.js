import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios"
import { Footer } from './components/Footer/Footer';
import { Health } from './pages/Health/Health';
import { Home } from './pages/Home/Home';
import { Notice } from './pages/Notice/Notice';
import { Politics } from './pages/Politics/Politics';
import { Science } from './pages/Science/Science';
import { Technology } from './pages/Technology/Technology';
import { World } from './pages/World/World';
import './App.css';

function App() {

  const searchDatas = async (topic, setState) => {

    const {data: resultDatas} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=uTyFufZl0DiKiyx9pTZngoD17I5K4t1L`)

    const datasFilter = resultDatas.results.filter(news => news.title && news.multimedia)

    const newsWithDate = datasFilter.map(news => {
      return {date: news.published_date, title: news.title, byFor: news.byline, description: news.abstract, urlImg: news.multimedia[0].url, kicker: news.kicker} 
    })

    setState(newsWithDate)

  }

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/health' element={<Health searchDatas={searchDatas}/>}></Route>
          <Route path='/science' element={<Science searchDatas={searchDatas}/>}></Route>
          <Route path='/technology' element={<Technology searchDatas={searchDatas}/>}></Route>
          <Route path='/world' element={<World searchDatas={searchDatas}/>}></Route>
          <Route path='/politics' element={<Politics searchDatas={searchDatas}/>}></Route>
          <Route path='/notice' element={<Notice/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
