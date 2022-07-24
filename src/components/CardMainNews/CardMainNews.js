import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"
import NewsDescription from "../NewsDescription/NewsDescription"
import styles from './style.module.css'

const CardMainNews = ({url, title, description, subtitle}) => {
  return (
    <div className={styles.cardMainNews}>
      <ButtonGoForNotices datas={{title, description, imgUrl: url}}>
        <NewsDescription title={title} description={description}/>  
        <div>
            <img src={url} alt={subtitle} />
            <small><a href="#">{subtitle}</a></small>
        </div>
      </ButtonGoForNotices>
    </div>
  )
}
export default CardMainNews