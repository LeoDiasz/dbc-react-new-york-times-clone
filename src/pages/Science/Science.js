import { useEffect, useState } from "react";
import axios from "axios";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export const Science = () => {
  const [listNewsWithDate, setListNewsWithDate] = useState([]);
  const [listNewsClimate, setListNewsClimate] = useState([]);

  const searchDatas = async () => {
    const { data: resultDatas } = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=uTyFufZl0DiKiyx9pTZngoD17I5K4t1L"
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
      };
      return newDatas;
    });

    const newsTopicClimate = datasFilter
      .filter((news) => news.section === "climate")
      .map((news) => {
        return { title: news.title, urlImg: news.multimedia[0].url, description: news.abstract };
      });

    setListNewsWithDate(newsWithDate);
    setListNewsClimate(newsTopicClimate);
  };

  useEffect(() => {
    searchDatas();
  }, []);

  return (
    <>
      <SectionHeader
        section="Science"
        subSections={[
          "Climate",
          "Space & Astronomy",
          "Health",
          "Trilobites",
          "Matter",
          "Out There",
          "Coronavirus outbreak",
        ]}
      />
      <section>
        <SectionNewsForTopic listNews={listNewsClimate} type="border" />
        <SectionNewsForTopic
          topicTitle="Trilobites"
          listNews={listNewsClimate}
          moreDescription="More in trilobites"
        />
        <SectionNewsForTopic
          topicTitle="Climate and Environment"
          listNews={listNewsClimate}
          moreDescription="More In Climate and Environment"
        />
        <SectionListNoticesWithDate listNews={listNewsWithDate} />
      </section>
    </>
  );
};
