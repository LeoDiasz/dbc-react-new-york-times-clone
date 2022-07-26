import { useEffect, useState } from "react";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionMainNews from "../../components/SectionMainNews/SectionMainNews";

export const Science = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);
  const [listNewsMains, setListNewsMains] = useState([])
  const [listNewsTopicOne, setListNewsTopicOne] = useState([])
  const [listNewsTrilobites, setListNewsTrilobites] = useState([])
  const [listNewsClimate, setListNewsClimate] = useState([])
  const listOfSetStates = [{setState: setListNewsMains, count: 4}, {setState: setListNewsTopicOne, count: 5}, 
  {setState: setListNewsTrilobites, count: 5}, {setState: setListNewsClimate, count: 5}]

  const listSectionsHeader = ["Climate", "Space & Astronomy", "Health", "Trilobites", "Matter", "Out There", "Coronavirus outbreak"]

  useEffect(() => {
    searchDatas("science", setListNews, listOfSetStates);
  }, []);

  return (
    <>
      <SectionHeader section="Science" subSections={listSectionsHeader}/>
      <section>
        {listNewsMains.length > 0 && <SectionMainNews listNews={listNewsMains} />}
        {listNewsTopicOne.length > 0 && <SectionNewsForTopic listNews={listNewsTopicOne} type="border" />}
        {listNewsTrilobites.length > 0 && <SectionNewsForTopic topicTitle="Trilobites" listNews={listNewsTrilobites} moreDescription="More in trilobites"/>}
        {listNewsClimate.length > 0 && <SectionNewsForTopic topicTitle="Climate and Environment" listNews={listNewsClimate} moreDescription="More In Climate and Environment"/>}
        {listNews.length > 0 && <SectionListNoticesWithDate listNews={listNews} />}
      </section>
    </>
  );
};
