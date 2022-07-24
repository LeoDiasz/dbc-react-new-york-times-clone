import { useEffect, useState } from "react";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { SectionNewsForTopic } from "../../components/SectionNewsForTopic/SectionNewsForTopic";

export const Technology = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    searchDatas("technology", setListNews);
  }, []);

  return (
    <>
      <SectionHeader
        section="Technology"
        subSections={[
          "Dealbook",
          "Markets",
          "Economy",
          "Energy",
          "Media",
          "Technology",
          "Personal Tech",
          "Small Business",
          "Your Money",
          "Mutual Funds & ETFS",
        ]}
      />
      <section>
        <SectionNewsForTopic
          topicTitle="Personal Technology"
          moreDescription="More in Personal Technology"
          listNews={listNews}
        />
        <SectionListNoticesWithDate listNews={listNews} />
      </section>
    </>
  );
};
