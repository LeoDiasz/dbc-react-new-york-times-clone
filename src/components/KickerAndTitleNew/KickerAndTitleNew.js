import styles from './style.module.css'

const KickerAndTitleNew = ({news}) => {
  return (
    <div className={styles.kickerAndTitleNew}>
        <h3>{news.kicker}</h3>
        <h3>{news.title}</h3>
    </div>
  )
}
export default KickerAndTitleNew