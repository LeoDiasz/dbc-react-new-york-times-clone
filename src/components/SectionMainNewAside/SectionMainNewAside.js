import moment from "moment";
import styles from "./style.module.css";
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices";

const SectionMainNewAside = ({ news }) => {
  let hours = moment(news.date).fromNow();
  hours = hours.replace(" hours", "h");

  return (
    <div className={styles.sectionMainNewAside}>
      <ButtonGoForNotices datas={news}>
        <div>
          <h2>{news.title}</h2>
          <img src={news.img} alt="" />
        </div>
        <p>{news.description}</p>
        <small>
          {hours} - {news.byFor}
        </small>
      </ButtonGoForNotices>
    </div>
  );
};
export default SectionMainNewAside;
