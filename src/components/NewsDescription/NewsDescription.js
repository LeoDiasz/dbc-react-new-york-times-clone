import styles from './style.module.css'

const NewsDescription = ({title, description}) => {
  return (
    <div className={styles.NewsDescription}>
        <h3>Amanda Shires Isn’t Letting Nashville, or Her Marriage, Off the Hook</h3>
        <p>Gov. Gavin Newsom of California signed legislation that would provide at least $10,000 to residents who successfully sue makers of illegal guns.</p>
    </div>
  )
}
export default NewsDescription