import styles from "./styles.module.css"
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"

export const NewsImageAndTitle = ({img, title, description}) => {

  return (
    <li className={styles.newsImageAndTitleContent}>
      <ButtonGoForNotices datas={{img, title, description}}>
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </ButtonGoForNotices>
    </li>
  )
}
