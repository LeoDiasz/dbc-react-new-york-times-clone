import { useEffect, useState } from "react";
import { SectionListNoticesWithDate } from "../../components/SectionListNoticesWithDate/SectionListNoticesWithDate";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export const Politics = ({searchDatas}) => {
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    searchDatas("politics", setListNews);
  }, []);

  return (
    <>
      <SectionHeader
        section="U.S. Politics"
        subSections={["Joe Biden", "2022 MIDTERM ELECTIONS"]}
      />
      <section>
        <SectionListNoticesWithDate listNews={listNews} />
      </section>
    </>
  );
};
