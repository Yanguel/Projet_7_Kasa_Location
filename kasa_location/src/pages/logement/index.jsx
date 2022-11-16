// Permet d'accéder aux paramètres passés dans l'URL
import { useParams } from 'react-router-dom'
// Import du fichier json mis à disposition
import data from './../../data/data.json'
// Import de la page Error
import Error from '../Error'

// Import des différents elements utiles dans la page logement.
import Accordion from '../../components/accordion'
import Carrousel from '../../components/carrousel'
import Rate from '../../components/Stars/'

//Import des différents fichiers CSS
import '../../styles/normalize.css'
import '../../styles/logement.css'
import '../../styles/accordion.css'

function Logement() {
  // Je récupere l'id dans l'URL
  let { id } = useParams()

  // Cette variable me permet de chercher un élement lié à l'id utilisé dans le format json.
  const logement = data.find((elt) => elt.id === id)
  //////////////////

  return logement ? (
    <section id="sectionLogement">
      <Carrousel />
      <div className="titleAndHost">
        <div className="titleAndLocation">
          <h1 className="logementTitle"> {logement.title} </h1>
          <p className="logementLocation">{logement.location}</p>
          <ul className="tags">
            {/* Création d'un li pour chaque tag */}
            {logement.tags.map((li, element) => (
              <li key={element + id} className="liTags">
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="divHost">
          {' '}
          <div className="pictureAndName">
            <p className="hostName">{logement.host.name}</p>

            <img
              src={logement.host.picture}
              alt="Portrait de l'hote"
              className="portraitHote"
            ></img>
          </div>
          <Rate logement={logement.rating} />
        </div>
      </div>
      <div className="centerAccordionsLogement">
        <div className="accordions accordionsLogement">
          <div className="accordionDescription">
            <Accordion
              title="Description"
              content={
                <p className="descriptionAccordions">{logement.description}</p>
              }
            />
          </div>
          <div className="accordionEquipement">
            <Accordion
              title="Equipement"
              content={
                <ul className="equipementAccordion">
                  {/* Création d'un li pour chaque "equipement"*/}
                  {logement.equipments.map((li, index) => (
                    <li key={index + id}>{li}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Error /> /* Si l'url de la page logement est inconnu ALORS afficher la page "Error" */
  )
}

export default Logement
