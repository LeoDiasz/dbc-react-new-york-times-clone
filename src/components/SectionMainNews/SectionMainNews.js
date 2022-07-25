import SectionMainNewAside from "../SectionMainNewAside/SectionMainNewAside";
import SectionNewMainCard from "../SectionNewMainCard/SectionNewMainCard";
import styles from "./style.module.css";

const SectionMainNews = ({ listNews }) => {
  listNews = listNews.filter((news, i) => i < 5);

  return (
    <section className={styles.sectionMainNews}>
      {listNews.length && <SectionNewMainCard news={listNews[0]} />}
      <div className={styles.divisor}></div>
      <aside className={styles.asideCard}>
        {listNews.length && <SectionMainNewAside news={listNews[1]} border="teste" />}
        {listNews.length && <SectionMainNewAside news={listNews[2]} border="border-bottom" />}
        {listNews.length && <SectionMainNewAside news={listNews[3]} /> }
      </aside>
    </section>
  );
};
export default SectionMainNews;
