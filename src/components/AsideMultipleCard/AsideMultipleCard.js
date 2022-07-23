import styles from './style.module.css'

const AsideMultipleCard = ({news}) => {
  return (
    <div className={styles.asideMultipleCard}>
        <h3>{news.title}</h3>
        <img src={news.multimedia[0].url} alt="" />
    </div>
  )
}
export default AsideMultipleCard