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
      <SectionHeader section="Health" subSections={listSectionsHeader}/>
      <section>
        {listNewsMains.length > 0 && <SectionMainNews listNews={listNewsMains} />}
        {listNewsTopicOne.length > 0 && <SectionNewsForTopic listNews={listNewsTopicOne} type="border"/>}
        {listNewsFromWell.length > 0 && <SectionNewsForTopic listNews={listNewsFromWell} topicTitle="From well" moreDescription="More in From Well"/>}
        {listNewsCovid.length > 0 && <SectionNewsForTopic listNews={listNewsCovid} topicTitle="The Covid-19 Pandemic" moreDescription="More In The Covid-19 Pandemic"/>}
        {listNews.length > 0 && <SectionListNoticesWithDate listNews={listNews}/>}
      </section>
    </>
  )
}
