import { NewsImageAndTitle } from "../NewsImageAndTitle/NewsImageAndTitle"
import styles from "./styles.module.css"

export const SectionNewsForTopic = ({topicTitle, listNews, moreDescription}) => {
  listNews = listNews.filter((news, i) =>  i < 5)

  return (
    <section className={styles.sectionNewsForTopicContent}>
      {topicTitle &&
      <div>
         <h3>{topicTitle}</h3>
         <small>{moreDescription}</small>
      </div>
      }
      <ul>
        {listNews && listNews.map(news => (
          <NewsImageAndTitle title={news.title} imgUrl={news.imgUrl} key={news.title}/>
        ))}
      </ul>
    </section>
  )
}
