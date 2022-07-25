import { useEffect, useState } from "react";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export const Science = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);
 

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
        <SectionNewsForTopic listNews={listNews} type="border" />
        <SectionNewsForTopic
          topicTitle="Trilobites"
          listNews={listNews}
          moreDescription="More in trilobites"
        />
        <SectionNewsForTopic
          topicTitle="Climate and Environment"
          listNews={listNews}
          moreDescription="More In Climate and Environment"
        />
        <SectionListNoticesWithDate listNews={listNews} />
      </section>
    </>
  );
};
