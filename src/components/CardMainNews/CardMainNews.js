import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"
import NewsDescription from "../NewsDescription/NewsDescription"
import styles from './style.module.css'

const CardMainNews = ({news}) => {
  const newsFormat = {title: news.title, description: news.description, img: news.img}

  return (
    <div className={styles.cardMainNews}>
      <ButtonGoForNotices datas={newsFormat}>
        <NewsDescription title={news.title} description={news.description}/>  
        <div>
            <img src={news.img} alt={news.subtitle} />
            <small>{news.subtitle}</small>
        </div>
      </ButtonGoForNotices>
    </div>
  )
}
export default CardMainNews