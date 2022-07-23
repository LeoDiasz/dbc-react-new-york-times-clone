import AsideMultipleCard from '../AsideMultipleCard/AsideMultipleCard'
import styles from './style.module.css'

const AsideMultipleSection = ({news}) => {
  return (
    <div className={styles.asideMultipleSection}>
      <h2>In Case That You Missed It</h2>
        {news.map((e, i) => (
          <AsideMultipleCard key={i} news={e}/>
        ))}
    </div>
  )
}
export default AsideMultipleSection