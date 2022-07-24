import {useEffect, useState} from 'react'
import {SectionListNoticesWithDate} from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate"
import { SectionNewsForTopic } from '../../components/SectionNewsForTopic/SectionNewsForTopic'

export const Health = ({searchDatas}) => {
  const [listNews, setListNews] = useState([])

  useEffect(() => {
    searchDatas("health", setListNews)

  }, [])

  return (
    <section>
      <SectionNewsForTopic listNews={listNews} type="border"/>
      <SectionNewsForTopic listNews={listNews} topicTitle="From well" moreDescription="More in From Well"/>
      <SectionNewsForTopic listNews={listNews} topicTitle="The Covid-19 Pandemic" moreDescription="More In The Covid-19 Pandemic"/>
      <SectionListNoticesWithDate listNews={listNews}/>
    </section>
  )
}
