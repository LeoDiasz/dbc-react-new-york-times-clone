import { useEffect, useState } from "react";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export const Science = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);
  const [listNewsClimate, setListNewsClimate] = useState([]);

  useEffect(() => {
    searchDatas("science", setListNews);
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
        <SectionListNoticesWithDate listNews={listNews} />
      </section>
    </>
  );
};
