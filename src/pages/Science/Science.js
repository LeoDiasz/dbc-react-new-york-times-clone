import {useEffect, useState} from 'react'
import axios from "axios"
import {SectionListNoticesWithDate} from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate"
import { SectionNewsForTopic } from '../../components/SectionNewsForTopic/SectionNewsForTopic'

export const Science = () => {
  const [listNewsWithDate, setListNewsWithDate] = useState([])
  const [listNewsClimate, setListNewsClimate] = useState([])

  const searchDatas = async () => {

    const {data: resultDatas} = await axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=uTyFufZl0DiKiyx9pTZngoD17I5K4t1L")

    const datasFilter = resultDatas.results.filter(news => news.title && news.multimedia)

    const newsWithDate = datasFilter.map(news => {
      const newDatas = {date: news.published_date, title: news.title, byFor: news.byline, description: news.abstract, urlImg: news.multimedia[0].url}
      return newDatas
    })

    const newsTopicClimate = datasFilter.filter(news => news.section === "climate").map(news => {return {title: news.title, imgUrl: news.multimedia[0].url}})

    setListNewsWithDate(newsWithDate)
    setListNewsClimate(newsTopicClimate)

  }

  useEffect(() => {

    searchDatas()

  }, [])

  
  return (
    <section>
      <SectionNewsForTopic topicTitle="Climate and Environment" listNews={listNewsClimate} moreDescription="More In Climate and Environment"/>
      <SectionListNoticesWithDate listNews={listNewsWithDate}/>
    </section>
  )
}
