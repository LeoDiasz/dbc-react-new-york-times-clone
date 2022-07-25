import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { Logo } from "../Logo/Logo";
import styles from "./styles.module.css"

export const TopHeader = ({section}) => {
  return (
    <header className={styles.topHeaderContent}>
      <div>
        <GiHamburgerMenu />
        <BiSearch />
        {section && <a href="/">{section}</a>}
      </div>
      <Logo width="195px" />
      <div>
        <button className="primary-button">SUBSCRIBE FOR $0.25/WEEK</button>
        <button className="primary-button">LOG IN</button>
      </div>
    </header>
  )
}
