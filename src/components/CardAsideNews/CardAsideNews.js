import styles from './style.module.css'

const CardAsideNews = ({news}) => {
  return (
    <div className={styles.card}>
        <div className={styles.cardAsideNews}>
            <div>
                <img src={news[0].multimedia[0].url} alt="" />
                <small>Taylor Turner and Axel Boada</small>
            </div>
            <h3>{news[0].title} </h3>
            <p>{news[0].abstract}</p>
        </div>

        <div className={styles.asideNewsBot}>
            <div>
                <img src={news[1].multimedia[0].url}  alt="" />
                <h3>{news[1].title}</h3>
            </div>
            <div className={styles.divisor}></div>
            <div>
                <img src={news[2].multimedia[0].url}  alt="" />
                <h3>{news[2].title}</h3>
            </div>
        </div>
    </div>
  )
}
export default CardAsideNews