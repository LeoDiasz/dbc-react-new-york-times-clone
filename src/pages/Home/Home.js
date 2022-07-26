import {useEffect, useState} from 'react'
import FullWidthContent from '../../components/FullWidthContent/FullWidthContent'
import CardMainNews from '../../components/CardMainNews/CardMainNews'
import CardAsideNews from '../../components/CardAsideNews/CardAsideNews'
import AsideMultipleSection from '../../components/AsideMultipleSection/AsideMultipleSection'
import AsideFourNews from '../../components/AsideFourNews/AsideFourNews'
import { Header } from '../../components/Header/Header'
import { SectionNewsForTopic } from '../../components/SectionNewsForTopic/SectionNewsForTopic'
import styles from './styles.module.css'

export const Home = ({searchDatas}) => {
  const [listNews, setListNews] = useState([])
  const [listNewsForAside, setListNewsForAside] = useState([])
  const [listNewsForAsideOpinions, setListNewsForAsideOpinions] = useState([])
  const [listNewsForAsideMultiples, setListNewsForAsideMultiples] = useState([])
  const [listMoreNews, setListMoreNews] = useState([])
  const [listEndNews, setListEndNews] = useState([])
  
  const listOfSetStates = [{setState: setListNewsForAside, count: 3}, {setState: setListNewsForAsideOpinions, count: 7}, {setState: setListNewsForAsideMultiples, count: 5}, {setState: setListMoreNews, count: 5}, {setState: setListEndNews, count: 5}]

  useEffect(() => {
      searchDatas("home", setListNews, listOfSetStates)
  }, [])
  
  return (
    <>
    <Header />
    <div className={styles.divHomeContent}>
      <main> 
        {listNews && listNews.map((news, i) => (
            <CardMainNews key={i} news={news}/>
        ))}
      </main>
      <div className={styles.divisor}></div>
      <aside className={styles.asideContent}>
        {listNewsForAside.length > 0 && <CardAsideNews news={listNewsForAside}/>}
        {listNewsForAsideOpinions.length > 0 && <AsideFourNews news={listNewsForAsideOpinions}/>}
        {listNewsForAsideMultiples.length > 0 && <AsideMultipleSection news={listNewsForAsideMultiples}/>}
      </aside>
    </div>    
    <section className={styles.sectionMoreNewsContent}>
      {listMoreNews.length > 0 && <SectionNewsForTopic listNews={listMoreNews} topicTitle="More News"/>}
      {listEndNews.length > 0 && <FullWidthContent news={listEndNews}/>}
    </section>
    
    </>
  )
}
