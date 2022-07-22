import styles from "./styles.module.css"
import {Link} from "react-router-dom"

export const ListTextSmall = ({text, size, link}) => {
  return (
    <li className={styles.listTextSmallContent}> 
      <Link to={link ? link : "/"} size={size}>{text}</Link>
    </li>
  )
}
