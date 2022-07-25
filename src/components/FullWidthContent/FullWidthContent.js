import styles from './style.module.css'

const FullWidthContent = ({news}) => {

    console.log(news)
  return (
    <div className={styles.fullWidthContent}>
        <div>
            <div>
                <img src={news[0].img} alt={news[0].title} />
                <small>{news[0].copyright}</small>
            </div>
            <div>
                <h3>{news[0].title}</h3>
                <p>{news[0].description}</p>
            </div>
        </div>
        
        <div className={styles.separador}></div>

        <div className={styles.aside}>
            <div className={styles.asideCol}>
                <div>
                    <img src={news[1].img} alt={news[1].title} /> 
                    <h3>{news[1].title}</h3>
                    <p>{news[1].description}</p>
                </div>
                <div className={styles.separador}></div>
                <div>
                    <img src={news[2].img} alt={news[2].title} /> 
                    <h3>{news[2].title}</h3>
                    <p>{news[2].description}</p>
                </div>
            </div>
            <div className={styles.voutestar}></div>
            <div className={styles.asideCol}>
                <div>
                    <img src={news[3].img} alt={news[3].title} /> 
                    <h3>{news[3].title}</h3>
                    <p>{news[3].description}</p>
                </div>
                <div className={styles.separador}></div>
                <div>
                    <img src={news[4].img} alt={news[4].title} /> 
                    <h3>{news[4].title}</h3>
                    <p>{news[4].description}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default FullWidthContent