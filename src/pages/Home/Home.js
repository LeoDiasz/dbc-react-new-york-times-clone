import {useEffect, useState} from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import FullWidthContent from '../../components/FullWidthContent/FullWidthContent'
import CardMainNews from '../../components/CardMainNews/CardMainNews'
import CardAsideNews from '../../components/CardAsideNews/CardAsideNews'
import AsideMultipleSection from '../../components/AsideMultipleSection/AsideMultipleSection'

export const Home = () => {
  const [data, setData] = useState([])
  const [aside, setaSide] = useState([])
  const [asideMultiple, setAsideMultiple] = useState([])
  const [ultimas, setUltimas] = useState([])
  const [primeiras, setPrimeiras] = useState([])

  const getDados = async () => {
    const {data: res} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b5hcWAwFGTKGTpvFYOJz9wufC163pyWk`)
    const comFoto = res.results.filter(e => e.multimedia)

    const ultimas5 = comFoto.filter((e, i)=> i > comFoto.length - 6)
    let semAsUltimas = comFoto.filter((e, i )=> i < comFoto.length - 5)
    const ultimas3 = semAsUltimas.filter((e, i) => i > semAsUltimas.length - 4)
    semAsUltimas = semAsUltimas.filter((e, i )=> i < semAsUltimas.length - 3)
    const asideCinco = semAsUltimas.filter((e, i) => i > semAsUltimas.length - 6)
    semAsUltimas = semAsUltimas.filter((e, i )=> i < semAsUltimas.length - 5)

    setaSide(ultimas3)
    setData(comFoto)
    setUltimas(ultimas5)
    setPrimeiras(semAsUltimas)
    setAsideMultiple(asideCinco)
  }

  useEffect(() => {
    getDados()
  }, [])
  
  return (
    <>
    <div className={styles.divHomeContent}>
      <div> 
        {primeiras.length > 0 ? primeiras.map((e, i) => (
            <CardMainNews key={i} title={e.title} description={e.abstract} url={e.multimedia[0].url} subtitle={e.multimedia[0].capition} />
        )) : ''}
      </div>
      <div className={styles.teste}></div>
      <div className={styles.asideContent}>
        {aside.length > 0 ? <CardAsideNews news={aside}/> : ''}
        {asideMultiple.length > 0 ? <AsideMultipleSection news={asideMultiple}/> : ''}
      </div>
    </div>
    {ultimas.length > 0 ? <FullWidthContent news={ultimas}/> : ''}
    </>
  )
}
