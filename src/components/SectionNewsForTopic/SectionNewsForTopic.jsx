import { NewsImageAndTitle } from "../NewsImageAndTitle/NewsImageAndTitle"
import styles from "./styles.module.css"

export const SectionNewsForTopic = ({topicTitle, listNews, moreDescription, type}) => {
  listNews = listNews.filter((news, i) =>  i < 5)

  return (
    <section className={type === "border" ? `${styles.sectionNewsForTopicContent} ${styles.NewsWithBorderTop}`: styles.sectionNewsForTopicContent}>
      {topicTitle &&
      <div>
         <h3>{topicTitle}</h3>
         <small>{moreDescription}</small>
      </div>
      }
      <ul>
        {listNews && listNews.map(news => (
          <NewsImageAndTitle title={news.title} imgUrl={news.urlImg} key={news.title} description={news.description}/>
        ))}
      </ul>
    </section>
  )
}
