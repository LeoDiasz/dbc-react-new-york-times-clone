import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import SectionMainNews from "../../components/SectionMainNews/SectionMainNews";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";


export const World = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);
  const [listNewsMains, setListNewsMains] = useState([])
  const [listNewsTopicOne, setListNewsTopicOne] = useState([])
  const [listNewsTopicTwo, setListNewsTopicTwo] = useState([])
  const [listNewsSaturday, setListNewsSaturday] = useState([])
  const [listNewsDispatches, setListNewsDispatches] = useState([])
  const listOfSetStates = [{setState: setListNewsMains, count: 4}, {setState: setListNewsTopicOne, count: 5}, 
  {setState: setListNewsTopicTwo, count: 5}, {setState: setListNewsSaturday, count: 5}, {setState: setListNewsDispatches, count: 5}]

  const listSectionsHeader = ["Africa","Americas","Asia","Australia","Canada", "Europe", "Middle East"]

  useEffect(() => {
    searchDatas("world", setListNews, listOfSetStates);
  }, []);

  return (
    <>
      <SectionHeader section="World News" subSections={listSectionsHeader}s/>
      <section>
        {listNewsMains.length > 0 && <SectionMainNews listNews={listNewsMains} />}
        {listNewsTopicOne.length > 0 && <SectionNewsForTopic listNews={listNewsTopicOne} type="border" />}
        {listNewsTopicTwo.length > 0 && <SectionNewsForTopic listNews={listNewsTopicTwo} type="border" />}
        {listNewsSaturday.length > 0 && <SectionNewsForTopic listNews={listNewsSaturday} topicTitle="The Saturday Profile" moreDescription="More in The Saturday Profile"/>}
        {listNewsDispatches.length > 0 && <SectionNewsForTopic listNews={listNewsDispatches} topicTitle="Dispatches" moreDescription="More in Dispatches"/>}
        {listNews.length > 0 && <SectionListNoticesWithDate listNews={listNews} />}
      </section>
    </>
  );
};
