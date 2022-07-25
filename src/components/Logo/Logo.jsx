import logoImg from "../../images/logo.png"
import {Link} from "react-router-dom"
import styles from "./styles.module.css"

export const Logo = ({width}) => {
  return (
    <Link to="/">
      <img  styles={styles.logoContent} style={{width: width}}src={logoImg} alt="Logo" />
    </Link>
  )
}
