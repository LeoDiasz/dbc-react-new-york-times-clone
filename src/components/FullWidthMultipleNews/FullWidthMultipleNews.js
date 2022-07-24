import styles from './style.module.css'

const FullWidthMultipleNews = ({news}) => {
    console.log(news)
    return (
    <div className={styles.fullWidthMultipleNews}>
        <h3>More News</h3>
        <div className={styles.multipleNews}>
            {news.map((e, i) => (
                <div key={i}>
                    <div>
                        <img src={e.multimedia[0].url} alt="" />
                        <small>{e.multimedia[0].copyright}</small>
                    </div>
                    <h3>{e.title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}
export default FullWidthMultipleNews