// Import du CSS lié au cartes logement
import styles from './Card.module.css'
// Import de l'outil qui permet de gerer les liens React.
import { Link } from 'react-router-dom'

function Card(props) {
  // Création d'une props utilisé dans le fichier "Home"
  const { id, image, title } = props
  return (
    // Récupération de 'l'id' grace aux props
    <Link to={`/fiche_logement/${id}`} className="photoLogement">
      <article
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                            url(${image})`,
        }}
        className={styles.card}
      >
        {/* Récupération du nom du logement grace aux props*/}
        <p className="titleCard">{title}</p>
      </article>
    </Link>
  )
}
export default Card
