import { ButtonGoForNotices } from '../ButtonGoForNotices/ButtonGoForNotices'
import styles from './style.module.css'

const KickerWithImage = ({news}) => {
  return (
    <div className={styles.kickerWithImage}>
      <ButtonGoForNotices datas={news}>
        <div>
            <h3>{news.kicker ? news.kicker : "Guest"}</h3>
            <h3>{news.title}</h3>
        </div>
        <img src={news.img} alt={news.title} />
      </ButtonGoForNotices>
    </div>
  )
}
export default KickerWithImage