import {useNavigate} from "react-router-dom"
import styles from "./styles.module.css"

export const ButtonGoForNotices = ({datas, children}) => {
  const goFor = useNavigate()

  const goForNotices = (datas) => {
   
    if(!datas) {
      return
    }

    localStorage.setItem("notice", JSON.stringify(datas))

    goFor("/notice")

  }

  return (
    <button onClick={event => goForNotices(datas)} className={styles.removeContentButton}>
      {children}
    </button>
  )
}
