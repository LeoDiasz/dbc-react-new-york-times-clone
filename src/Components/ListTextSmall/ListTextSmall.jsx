import styles from "./styles.module.css"

export const ListTextSmall = ({text, size, link}) => {
  return (
    <li className={styles.listTextSmallContent}>
      <a style={{fontSize:size}} href={link ? link : "#"}>{text}</a>
    </li>
  )
}
