import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionMainNews from "../../components/SectionMainNews/SectionMainNews";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";

export const Technology = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);
  const [listNewsMains, setListNewsMains] = useState([])
  const [listNewsPersonalTechnology, setListNewsPersonalTechnology] = useState([])
  const listOfSetStates = [{setState: setListNewsMains, count: 4}, {setState: setListNewsPersonalTechnology, count: 5}]
  const listSectionsHeader = ["Dealbook", "Markets", "Economy","Energy","Media","Technology","Personal Tech","Small Business","Your Money","Mutual Funds & ETFS",]

  useEffect(() => {
    searchDatas("technology", setListNews, listOfSetStates);
  }, []);

  return (
    <>
      <SectionHeader section="Technology" subSections={listSectionsHeader}/>
      <section>
        <SectionMainNews listNews={listNewsMains}/>
        <SectionNewsForTopic topicTitle="Personal Technology" moreDescription="More in Personal Technology" listNews={listNewsPersonalTechnology} />
        <SectionListNoticesWithDate listNews={listNews} />
      </section>
    </>
  );
};
