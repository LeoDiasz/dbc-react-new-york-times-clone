import styles from "./styles.module.css"
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"

export const NewsImageAndTitle = ({img, title, description, copyright}) => {

  return (
    <li className={styles.newsImageAndTitleContent}>
      <ButtonGoForNotices datas={{img, title, description}}>
        <img src={img} alt={title} />
        {copyright && <small>{copyright}</small>}
        <h4>{title}</h4>
      </ButtonGoForNotices>
    </li>
  )
}
