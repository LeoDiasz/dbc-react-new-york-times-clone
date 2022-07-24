import SectionMainNewAside from "../SectionMainNewAside/SectionMainNewAside";
import SectionNewMainCard from "../SectionNewMainCard/SectionNewMainCard";
import styles from "./style.module.css";

const SectionMainNews = ({ listNews }) => {
  listNews = listNews.filter((news, i) => i < 5);

  return (
    <section className={styles.sectionMainNews}>
      {listNews.length > 0 ? <SectionNewMainCard news={listNews[0]} /> : ""}
      <div className={styles.divisor}></div>
      <aside className={styles.asideCard}>
        {listNews.length > 0 ? (
          <SectionMainNewAside news={listNews[1]} border="teste" />
        ) : (
          ""
        )}
        {listNews.length > 0 ? (
          <SectionMainNewAside news={listNews[2]} border="border-bottom" />
        ) : (
          ""
        )}
        {listNews.length > 0 ? <SectionMainNewAside news={listNews[3]} /> : ""}
      </aside>
    </section>
  );
};
export default SectionMainNews;
