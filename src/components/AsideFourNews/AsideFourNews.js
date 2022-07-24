import KickerAndTitleNew from '../KickerAndTitleNew/KickerAndTitleNew'
import KickerWithImage from '../KickerWithImage/KickerWithImage'
import styles from './style.module.css'

const AsideFourNews = ({news}) => {
  console.log(news)
  return (
    <div className={styles.asideFourNews}>
      <h3>Opinion</h3>
      {news.map((e, i) => i % 3 === 0 ? (
        <KickerWithImage className={i === news.length -1 ? 'border' : 'noborder'} news={e} />
      ) : 
      <KickerAndTitleNew className={i === news.length -1 ? 'border' : 'noborder'} news={e}/>)}
    </div>
  )
}
export default AsideFourNews