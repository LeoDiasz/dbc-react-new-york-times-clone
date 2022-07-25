import moment from "moment";
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices";
import styles from "./style.module.css";

const SectionNewMainCard = ({ news }) => {
  let hours = moment(news.date).fromNow();
  hours = hours.replace(" hours", "h");

  return (
    <div className={styles.mainCard}>
      <ButtonGoForNotices datas={news}>
        <div>
          <img src={news.img} />
          <small>{news.copyright}</small>
        </div>
        <div>
          <a href="/">
            <h3>{news.title}</h3>
          </a>
          <p>{news.description}</p>
          <p>
            {hours} - {news.byFor}
          </p>
        </div>
      </ButtonGoForNotices>  
    </div>
  );
};
export default SectionNewMainCard;
