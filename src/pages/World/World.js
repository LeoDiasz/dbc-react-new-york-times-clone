import axios from "axios";
import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import SectionMainNews from "../../components/SectionMainNews/SectionMainNews";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";
import styles from "./styles.module.css";

export const World = () => {
  const [listNewsWithDate, setListNewsWithDate] = useState([]);

  const searchDatas = async () => {
    const { data: resultDatas } = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=uTyFufZl0DiKiyx9pTZngoD17I5K4t1L"
    );

    const datasFilter = resultDatas.results.filter(
      (news) => news.title && news.multimedia
    );

    const newsWithDate = datasFilter.map((news) => {
      const newDatas = {
        date: news.published_date,
        title: news.title,
        byFor: news.byline,
        description: news.abstract,
        urlImg: news.multimedia[0].url,
        copyright: news.multimedia[0].copyright,
      };
      return newDatas;
    });

    setListNewsWithDate(newsWithDate);
  };

  useEffect(() => {
    searchDatas();
  }, []);

  return (
    <>
      <SectionHeader
        section="World News"
        subSections={[
          "Africa",
          "Americas",
          "Asia",
          "Australia",
          "Canada",
          "Europe",
          "Middle East",
        ]}
      />
      <section className={styles.worldContent}>
        {<SectionMainNews listNews={listNewsWithDate} />}
        <SectionNewsForTopic listNews={listNewsWithDate} type="border" />
        <SectionNewsForTopic listNews={listNewsWithDate} type="border" />
        <SectionNewsForTopic
          listNews={listNewsWithDate}
          topicTitle="The Saturday Profile"
          moreDescription="More in The Saturday Profile"
        />
        <SectionNewsForTopic
          listNews={listNewsWithDate}
          topicTitle="Dispatches"
          moreDescription="More in Dispatches"
        />
        <SectionListNoticesWithDate listNews={listNewsWithDate} />
      </section>
    </>
  );
};
