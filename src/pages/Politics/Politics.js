import { useEffect, useState } from "react";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionMainNews from "../../components/SectionMainNews/SectionMainNews";

export const Politics = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);
  const [listNewsMains, setListNewsMains] = useState([])
  const listOfSetStates = [{setState: setListNewsMains, count: 4}]

  useEffect(() => {
    searchDatas("politics", setListNews, listOfSetStates);
  }, []);

  return (
    <>
      <SectionHeader section="U.S. Politics" subSections={["Joe Biden", "2022 MIDTERM ELECTIONS"]}/>
      <section>
        {listNewsMains.length > 0 && <SectionMainNews listNews={listNewsMains} />}
        {listNews.length > 0 && <SectionListNoticesWithDate listNews={listNews} />}
      </section>
    </>
  );
};
