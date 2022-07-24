import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import styles from "./style.module.css";
import { Logo } from "../Logo/Logo";

const SectionHeader = ({ section, subSections }) => {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.topHeader}>
        <div>
          <GiHamburgerMenu />
          <BiSearch />
          <a href="#">{section}</a>
        </div>
        <Logo width="195px" />
        <div>
          <button className="primary-button">SUBSCRIBE FOR $0.25/WEEK</button>
          <button className="primary-button">LOG IN</button>
        </div>
      </div>
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
    </header>
  );
};
export default SectionHeader;
