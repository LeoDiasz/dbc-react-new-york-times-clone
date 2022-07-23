import styles from './style.module.css'

const NewsDescription = ({title, description}) => {
  return (
    <div className={styles.NewsDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}
export default NewsDescription