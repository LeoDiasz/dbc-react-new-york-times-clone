import {useEffect, useState} from 'react'
import axios from 'axios'
import MainContent from '../../components/MainContent/MainContent'
import AsideContent from '../../components/AsideContent/AsideContent'
import styles from './styles.module.css'

export const Home = () => {
  const [business, setBusiness] = useState([])
  const [us, setUs] = useState([])

  const getDados = async () => {
    const {data} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b5hcWAwFGTKGTpvFYOJz9wufC163pyWk`)
    
    setBusiness(data.results.filter(e => e.section === 'business'))
    const us = data.results.filter(e => e.section === 'us')
  }

  useEffect(() => {
    getDados()
  }, [])
  


  return (
    <div className={styles.divHomeContent}>
      <MainContent >
      
      </MainContent>
      <AsideContent>

      </AsideContent>
    </div>
  )
}
