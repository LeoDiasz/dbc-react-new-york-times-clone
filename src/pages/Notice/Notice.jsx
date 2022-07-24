import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { TopHeader } from '../../components/TopHeader/TopHeader'
import styles from "./styles.module.css"


export const Notice = () => {
  const [datasNotices, setDatasNotices] = useState({})
  const goForHome = useNavigate()

  useEffect(() => {
    let datas = localStorage.getItem("notice")

    if(!datas) {
      goForHome("/")
      return
    }

    localStorage.removeItem("notice")

    datas = JSON.parse(datas)    

    setDatasNotices(datas)
  }, [])

  return (
    <>
      <TopHeader/>
      <section className={styles.noticeContent}>
        {datasNotices.title && <h1>{datasNotices.title}</h1>}
        {datasNotices.imgUrl && <img src={datasNotices.imgUrl} alt={datasNotices.title} />}
        {datasNotices.description && <p>{datasNotices.description}</p>}
      </section>
    </>
  )
}
