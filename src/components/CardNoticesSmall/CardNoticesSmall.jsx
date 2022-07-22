import styles from "./styles.module.css"

export const CardNoticesSmall = ({title, imgUrl, listParagraph}) => {
  return (
    <li className={styles.cardNoticesSmall}>
      <h4>{title}</h4>
      <img src={imgUrl} alt="" />
      <div>
        {listParagraph && listParagraph.map(paragraph => (
          <p key={paragraph}>paragraph</p>
        ))}
      </div>
    </li>
  )
}
