import styles from "./styles.module.css"

export const NewsImageAndTitle = ({imgUrl, title}) => {
  return (
    <li className={styles.newsImageAndTitleContent}>
      <img src={imgUrl} alt={title} />
      <h4>{title}</h4>
    </li>
  )
}
