import {useEffect, useState} from 'react'
import {SectionListNoticesWithDate} from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate"
import SectionMainNews from '../../components/SectionMainNews/SectionMainNews';
import { SectionNewsForTopic } from '../../components/SectionNewsForTopic/SectionNewsForTopic'
import SectionHeader from "../../components/SectionHeader/SectionHeader"

export const Health = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);
  const [listNewsMains, setListNewsMains] = useState([])
  const [listNewsTopicOne, setListNewsTopicOne] = useState([])
  const [listNewsFromWell, setListNewsFromWell] = useState([])
  const [listNewsCovid, setListNewsCovid] = useState([])
  const listOfSetStates = [{setState: setListNewsMains, count: 4}, {setState: setListNewsTopicOne, count: 5}, 
  {setState: setListNewsFromWell, count: 5}, {setState: setListNewsCovid, count: 5}]

  const listSectionsHeader = ["Health Policy", "Global Health", "The New Old Age", "Science", "Well", "Coronavirus Outbreak"]

  useEffect(() => {
    searchDatas("health", setListNews, listOfSetStates)

  }, [])

  return (
    <>
      <SectionHeader section="Science" subSections={listSectionsHeader}/>
      <section>
        <SectionMainNews listNews={listNewsMains}/>
        <SectionNewsForTopic listNews={listNewsTopicOne} type="border"/>
        <SectionNewsForTopic listNews={listNewsFromWell} topicTitle="From well" moreDescription="More in From Well"/>
        <SectionNewsForTopic listNews={listNewsCovid} topicTitle="The Covid-19 Pandemic" moreDescription="More In The Covid-19 Pandemic"/>
        <SectionListNoticesWithDate listNews={listNews}/>
      </section>
    </>
  )
}
