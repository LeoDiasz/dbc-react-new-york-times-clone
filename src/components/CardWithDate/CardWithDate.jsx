import moment from "moment"
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"
import styles from "./styles.module.css"

export const CardWithDate = ({news}) => {
  const date = moment(news.date).format("ll")
  const newsFormat = {title: news.title, description: news.description, img: news.img}
  
  return (
    <li className={styles.cardWithDateContent}>
      <ButtonGoForNotices datas={newsFormat}>
        <div>
          <small>{date}</small>
        </div>
        <div> 
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <small>{news.subtitle}</small>
        </div>
        <img src={news.img} alt={news.subtitle} />
      </ButtonGoForNotices>
    </li>
  )
}
