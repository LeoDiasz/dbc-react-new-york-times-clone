import styles from "./styles.module.css"
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"

export const NewsImageAndTitle = ({imgUrl, title, description}) => {

  return (
    <li className={styles.newsImageAndTitleContent}>
      <ButtonGoForNotices datas={{imgUrl, title, description}}>
        <img src={imgUrl} alt={title} />
        <h4>{title}</h4>
      </ButtonGoForNotices>
    </li>
  )
}
