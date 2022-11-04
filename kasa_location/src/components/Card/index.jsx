import styles from './Card.module.css'

function Card(props) {
  const { image, title } = props
  const bgImg = {
    backgroundImage: `url(${image})`,
  }
  return (
    <a href="http://localhost:3000/fiche_logement/">
      <article style={bgImg} className={styles.card}>
        <p className="titleCard">{title}</p>
      </article>
    </a>
  )
}
export default Card
