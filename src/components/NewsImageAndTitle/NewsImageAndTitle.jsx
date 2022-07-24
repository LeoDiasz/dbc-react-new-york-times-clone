import styles from "./styles.module.css"
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"

export const NewsImageAndTitle = ({imgUrl, title}) => {

  return (
    <ButtonGoForNotices datas={{imgUrl, title}}>
      <li className={styles.newsImageAndTitleContent}>
        <img src={imgUrl} alt={title} />
        <h4>{title}</h4>
      </li>
    </ButtonGoForNotices>
  )
}
