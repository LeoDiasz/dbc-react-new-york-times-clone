import styles from './style.module.css'

const KickerWithImage = ({news}) => {
  return (
    <div className={styles.kickerWithImage}>
        <div>
            <h3>{news.kicker}</h3>
            <h3>{news.title}</h3>
        </div>
        <img src={news.multimedia[2].url} alt="" />
    </div>
  )
}
export default KickerWithImage