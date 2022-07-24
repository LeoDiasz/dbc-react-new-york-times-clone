
import { useState, useEffect } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import SectionMainNews from "../../components/SectionMainNews/SectionMainNews";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";
import styles from "./styles.module.css";

export const World = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    searchDatas("world", setListNews);
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
        {<SectionMainNews listNews={listNews} />}
        <SectionNewsForTopic listNews={listNews} type="border" />
        <SectionNewsForTopic listNews={listNews} type="border" />
        <SectionNewsForTopic
          listNews={listNews}
          topicTitle="The Saturday Profile"
          moreDescription="More in The Saturday Profile"
        />
        <SectionNewsForTopic
          listNews={listNews}
          topicTitle="Dispatches"
          moreDescription="More in Dispatches"
        />
        <SectionListNoticesWithDate listNews={listNews} />
      </section>
    </>
  );
};
