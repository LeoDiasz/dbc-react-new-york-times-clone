import { ButtonGoForNotices } from '../ButtonGoForNotices/ButtonGoForNotices'
import styles from './style.module.css'

const AsideMultipleCard = ({news}) => {
  return (
    <div className={styles.asideMultipleCard}>
        <ButtonGoForNotices datas={news}>
          <h3>{news.title}</h3>
          <img src={news.img} alt={news.title} />
        </ButtonGoForNotices>
    </div>
  )
}
export default AsideMultipleCard