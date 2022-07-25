import {NewsImageAndTitle} from "../../components/NewsImageAndTitle/NewsImageAndTitle"
import { ButtonGoForNotices } from "../ButtonGoForNotices/ButtonGoForNotices"
import styles from './style.module.css'

const CardAsideNews = ({news}) => {

    return (
    <div className={styles.card}>
        <div className={styles.cardAsideNews}>
            {news && <ButtonGoForNotices datas={news[0]}>
                <div>
                    <img src={news[0].img} alt={news[0].description} />
                    <small>Taylor Turner and Axel Boada</small>
                </div>
                <h3>{news[0].title} </h3>
                <p>{news[0].description}</p>
            </ButtonGoForNotices>}
        </div>

        <div className={styles.asideNewsBot}>
            {news && <NewsImageAndTitle title={news[1].title} img={news[1].img}/>}
            {news && <NewsImageAndTitle title={news[2].title} img={news[2].img}/>}
        </div>
    </div>
    )
}
export default CardAsideNews