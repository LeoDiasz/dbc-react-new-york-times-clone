import styles from './style.module.css'

const FullWidthContent = ({news}) => {
  return (
    <div className={styles.fullWidthContent}>
        <div>
            <div>
                <img src={news[0].multimedia[0].url} alt="" />
                <small>{news[0].multimedia[0].copyright}</small>
            </div>
            <div>
                <h3>{news[0].title}</h3>
                <p>{news[0].abstract}</p>
            </div>
        </div>
        
        <div className={styles.separador}></div>

        <div className={styles.aside}>
            <div className={styles.asideCol}>
                <div>
                    <img src={news[1].multimedia[0].url} alt="" /> 
                    <h3>{news[1].title}</h3>
                    <p>{news[1].abstract}</p>
                </div>
                <div className={styles.separador}></div>
                <div>
                    <img src={news[2].multimedia[0].url} alt="" />
                    <h3>{news[2].title}</h3>
                    <p>{news[2].abstract}</p>
                </div>
            </div>
            <div className={styles.voutestar}></div>
            <div className={styles.asideCol}>
                <div>
                    <img src={news[3].multimedia[0].url} alt="" /> 
                    <h3>{news[3].title}</h3>
                    <p>{news[3].abstract}</p>
                </div>
                <div className={styles.separador}></div>
                <div>
                    <img src={news[4].multimedia[0].url} alt="" />
                    <h3>{news[4].title}</h3>
                    <p>{news[4].abstract}</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default FullWidthContent