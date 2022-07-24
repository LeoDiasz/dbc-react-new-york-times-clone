import {useEffect, useState} from 'react'
import {SectionListNoticesWithDate} from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate"
import axios from "axios"
import { SectionNewsForTopic } from '../../components/SectionNewsForTopic/SectionNewsForTopic'


export const Health = () => {
  const [listNewsWithDate, setListNewsWithDate] = useState([])

  const searchDatas = async () => {

    const {data: resultDatas} = await axios.get("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=uTyFufZl0DiKiyx9pTZngoD17I5K4t1L")

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
      <SectionNewsForTopic listNews={listNewsWithDate} type="border"/>
      <SectionNewsForTopic listNews={listNewsWithDate} topicTitle="From well" moreDescription="More in From Well"/>
      <SectionNewsForTopic listNews={listNewsWithDate} topicTitle="The Covid-19 Pandemic" moreDescription="More In The Covid-19 Pandemic"/>
      <SectionListNoticesWithDate listNews={listNewsWithDate}/>
    </section>
  )
}
