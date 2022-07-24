import styles from "./style.module.css";
import moment from "moment";

const SectionNewMainCard = ({ news }) => {
  let hours = moment(news.date).fromNow();
  hours = hours.replace(" hours", "h");

  return (
    <div className={styles.mainCard}>
      <div>
        <img src={news.urlImg} />
        <small>{news.copyright}</small>
      </div>
      <div>
        <a href="#">
          <h3>{news.title}</h3>
        </a>
        <p>{news.description}</p>
        <p>
          {hours} - {news.byFor}
        </p>
      </div>
    </div>
  );
};
export default SectionNewMainCard;
