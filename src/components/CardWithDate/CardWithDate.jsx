import styles from "./styles.module.css"
import moment from "moment"
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"

export const CardWithDate = ({date, imgUrl, title, description, subtitle}) => {
  date = moment(date).format("ll")
  
  return (
    <li className={styles.cardWithDateContent}>
      <ButtonGoForNotices datas={{title, description, imgUrl}}>
        <div>
          <small>{date}</small>
        </div>
        <div> 
          <h2>{title}</h2>
          <p>{description}</p>
          <small>{subtitle}</small>
        </div>
        <img src={imgUrl} alt={subtitle} />
      </ButtonGoForNotices>
    </li>
  )
}
