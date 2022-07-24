import {useEffect, useState} from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import FullWidthContent from '../../components/FullWidthContent/FullWidthContent'
import CardMainNews from '../../components/CardMainNews/CardMainNews'
import CardAsideNews from '../../components/CardAsideNews/CardAsideNews'
import AsideMultipleSection from '../../components/AsideMultipleSection/AsideMultipleSection'
import FullWidthMultipleNews from '../../components/FullWidthMultipleNews/FullWidthMultipleNews'
import AsideFourNews from '../../components/AsideFourNews/AsideFourNews'
import { Header } from '../../components/Header/Header'

export const Home = ({searchDatas}) => {
  const [data, setData] = useState([])
  const [aside, setaSide] = useState([])
  const [asideMultiple, setAsideMultiple] = useState([])
  const [ultimas, setUltimas] = useState([])
  const [primeiras, setPrimeiras] = useState([])
  const [moreNews, setMoreNews] = useState([])
  const [opinion, setOpinion] = useState([])

  const getDados = async () => {
    const {data: res} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b5hcWAwFGTKGTpvFYOJz9wufC163pyWk`)
    const comFoto = res.results.filter(e => e.multimedia && e.section !== "opinion")
    const opinionNews = res.results.filter(e => e.section === "opinion" && e.kicker)
    setOpinion(opinionNews)    
    const ultimas5 = comFoto.filter((e, i)=> i > comFoto.length - 6)
    let semAsUltimas = comFoto.filter((e, i )=> i < comFoto.length - 5)
    const ultimas3 = semAsUltimas.filter((e, i) => i > semAsUltimas.length - 4)
    semAsUltimas = semAsUltimas.filter((e, i )=> i < semAsUltimas.length - 3)
    const asideCinco = semAsUltimas.filter((e, i) => i > semAsUltimas.length - 6)
    semAsUltimas = semAsUltimas.filter((e, i )=> i < semAsUltimas.length - 5)
    const more5 = semAsUltimas.filter((e, i) => i > semAsUltimas.length - 6)
    semAsUltimas = semAsUltimas.filter((e, i )=> i < semAsUltimas.length - 5)


    setaSide(ultimas3)
    setData(comFoto)
    setUltimas(ultimas5)
    setPrimeiras(semAsUltimas)
    setAsideMultiple(asideCinco)
    setMoreNews(more5)
  }

  useEffect(() => {
    getDados()
  }, [])
  
  return (
    <>
    <Header />
    <div className={styles.divHomeContent}>
      <div> 
        {primeiras.length > 0 ? primeiras.map((e, i) => (
            <CardMainNews key={i} title={e.title} description={e.abstract} url={e.multimedia[0].url} subtitle={e.multimedia[0].capition} />
        )) : ''}
      </div>
      <div className={styles.teste}></div>
      <div className={styles.asideContent}>
        {aside.length > 0 ? <CardAsideNews news={aside}/> : ''}
        {opinion.length > 0 ?<AsideFourNews news={opinion}/>: ''}
        {asideMultiple.length > 0 ? <AsideMultipleSection news={asideMultiple}/> : ''}
      </div>
    </div>    
    {asideMultiple.length > 0 ? <FullWidthMultipleNews news={moreNews}/> : ''}
    {ultimas.length > 0 ? <FullWidthContent news={ultimas}/> : ''}
    
    </>
  )
}
