import { TopHeader } from "../TopHeader/TopHeader";
import styles from "./style.module.css";

const SectionHeader = ({ section, subSections }) => {
  return (
    <section className={styles.sectionHeader}>
      <TopHeader section={section}/>
      <div className={styles.botHeader}>
        <h1>{section}</h1>
        <div>
          <nav>
            <ul>
              {subSections.map((e, i) => (
                <li key={i}>
                  <a href="#">{e}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default SectionHeader;
