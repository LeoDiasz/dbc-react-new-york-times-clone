import {useEffect, useState} from 'react'
import {SectionListNoticesWithDate} from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate"
import axios from "axios"
import { SectionNewsForTopic } from '../../components/SectionNewsForTopic/SectionNewsForTopic'

export const Technology = () => {
  const [listNewsWithDate, setListNewsWithDate] = useState([])

  const searchDatas = async () => {

    const {data: resultDatas} = await axios.get("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=uTyFufZl0DiKiyx9pTZngoD17I5K4t1L")

    const datasFilter = resultDatas.results.filter(news => news.title && news.multimedia)

    const newsWithDate = datasFilter.map(news => {
      const newDatas = {date: news.published_date, title: news.title, byFor: news.byline, description: news.abstract, urlImg: news.multimedia[0].url}
      return newDatas
    })

    setListNewsWithDate(newsWithDate)

  }

  useEffect(() => {

    searchDatas()

  }, [])

  
  return (
    <section>
      <SectionNewsForTopic topicTitle="Personal Technology" moreDescription="More in Personal Technology" listNews={listNewsWithDate}/>
      <SectionListNoticesWithDate listNews={listNewsWithDate}/>
    </section>
  )
}
