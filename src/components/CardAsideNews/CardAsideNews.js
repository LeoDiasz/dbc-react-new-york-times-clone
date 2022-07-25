import {NewsImageAndTitle} from "../../components/NewsImageAndTitle/NewsImageAndTitle"
import styles from './style.module.css'

const CardAsideNews = ({news}) => {
    return (
    <div className={styles.card}>
        <div className={styles.cardAsideNews}>
            <div>
                <img src={news[0].img} alt={news[0].description} />
                <small>Taylor Turner and Axel Boada</small>
            </div>
            <h3>{news[0].title} </h3>
            <p>{news[0].description}</p>
        </div>

        <div className={styles.asideNewsBot}>
            <NewsImageAndTitle title={news[1].title} img={news[1].img}/>
            <NewsImageAndTitle title={news[2].title} img={news[2].img}/>
        </div>
    </div>
    )
}
export default CardAsideNews