import { ListTextSmall } from "../ListTextSmall/ListTextSmall"
import styles from "./styles.module.css"

export const NavListInColumn = ({title, listTopics}) => {

  return (
    <div className={styles.divContentList}>
      <h3>{title}</h3>
      <ul className={styles.ulContent}>
        {listTopics && listTopics.map(topic => (
          <ListTextSmall text={topic} size="14px" key={topic}/>
        ))}
      </ul>
    </div>
  )
}
