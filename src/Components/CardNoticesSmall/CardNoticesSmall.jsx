
export const CardNoticesSmall = ({title, imgUrl, listParagraph}) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={imgUrl} alt="" />
      <div>
        {listParagraph && listParagraph.map(paragraph => (
          <p key={paragraph}>paragraph</p>
        ))}
      </div>
    </div>
  )
}
