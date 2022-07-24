import styles from "./style.module.css";
import moment from "moment";

const SectionMainNewAside = ({ news }) => {
  let hours = moment(news.date).fromNow();
  hours = hours.replace(" hours", "h");

  return (
    <div className={styles.sectionMainNewAside}>
      <div>
        <h2>{news.title}</h2>
        <img src={news.urlImg} alt="" />
      </div>
      <p>{news.description}</p>
      <small>
        {hours} - {news.byFor}
      </small>
    </div>
  );
};
export default SectionMainNewAside;
