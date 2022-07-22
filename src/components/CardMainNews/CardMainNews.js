import NewsDescription from "../NewsDescription/NewsDescription"
import styles from './style.module.css'

const CardMainNews = ({url, title, description, subtitle}) => {
  return (
    <div className={styles.cardMainNews}>
        <NewsDescription title={title} description={description}/>  
        <div>
            <img src={url} alt={subtitle} />
            <small>{subtitle}</small>
        </div>
    </div>
  )
}
export default CardMainNews