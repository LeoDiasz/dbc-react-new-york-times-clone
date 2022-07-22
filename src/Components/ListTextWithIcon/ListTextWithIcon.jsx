import styles from "./styles.module.css"

export const ListTextWithIcon = ({icon, text}) => {
  return (
    <li className={styles.ListTextWithIconContent}>
      <a href="/#">
        {icon}
        {text}
      </a>
    </li>
  )
}
