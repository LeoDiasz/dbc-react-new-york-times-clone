import { ButtonGoForNotices } from '../ButtonGoForNotices/ButtonGoForNotices'
import styles from './style.module.css'

const KickerAndTitleNew = ({news}) => {
  return (
    <div className={styles.kickerAndTitleNew}>
      <ButtonGoForNotices datas={news}>
        <h3>{news.kicker ? news.kicker : "Guest"}</h3>
        <h3>{news.title}</h3>
      </ButtonGoForNotices>
    </div>
  )
}
export default KickerAndTitleNew