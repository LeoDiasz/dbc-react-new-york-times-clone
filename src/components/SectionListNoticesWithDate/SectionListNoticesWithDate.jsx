import styles from "./styles.module.css"
import { BiSearch } from 'react-icons/bi'
import { CardWithDate } from '../../components/CardWithDate/CardWithDate'

export const SectionListNoticesWithDate = ({listNews}) => {
  return (
    <section className={styles.sectionListNoticesWithDateContent}>
      <nav className={styles.navSearchNews}>
        <ul>
          <li>
            <button>Latest</button>
          </li>
          <li>
            <button>
              <BiSearch/>
              <input type="text" placeholder="Search"/>
            </button>
          </li>
        </ul>
      </nav>
      <ul>
        {listNews.map(news => (
          <CardWithDate date={news.date} imgUrl={news.urlImg} title={news.title} description={news.description} subtitle={news.byFor} key={news.title}/>
        ))}
      </ul>
      
    </section>
  )
}
