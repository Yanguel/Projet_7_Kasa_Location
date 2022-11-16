// Import du CSS lié au carroussel présent sur la page "fiche_logement"
import '../../styles/carrousel.css'
// Import de useParams.
// Permet d'accéder aux paramètres passé dans l'URL
import { useParams } from 'react-router-dom'
// fonction/Hook permettant d'ajouter l'état local à des fonctions composants
import { useState } from 'react'
// Import du fichier json mis à disposition
import data from '../../data/data.json'
//Import de la fonction "btnSlider" qui gere les switch du carrousel
import BtnSlider from './btnSlider'

// Fonction permettant
function Carrousel() {
  let { id } = useParams()

  // Cette variable me permet de chercher un élement lié à l'id utilisé dans le format json.
  const logement = data.find((elt) => elt.id === id)

  // Initialise le total à 1.
  const [slideIndex, setSlideIndex] = useState(1)

  // Condition qui permet d'ajouter ou non une quantité à l'élément "suivant"
  const nextSlide = () => {
    if (slideIndex !== logement.pictures.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === logement.pictures.length) {
      setSlideIndex(1)
    }
  }
  // Condition qui permet d'enlever ou non une quantité à l'élément "précédent"
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(logement.pictures.length)
    }
  }

  // Condition afin d'afficher ou non l'index des photos.
  const indexPictures =
    logement.pictures.length > 1 ? (
      <p>
        {slideIndex} / {logement.pictures.length}
      </p>
    ) : (
      ''
    )
  // Condition afin d'afficher ou non les flèches du carrousel.
  const vectorOrnot =
    logement.pictures.length > 1 ? (
      <span>
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      </span>
    ) : (
      ''
    )
  return (
    <div className="container-slider">
      {/* Je recupere tout les éléments pictures ainsi que leurs index grace à .map*/}
      {logement.pictures.map((obje, index) => {
        return (
          <div
            /* l'élément disposant du "active-anim" devient visible */
            className={
              slideIndex === index + 1 ? 'slide active-anim' : 'slide '
            }
            key={id + index}
          >
            {/* Utilisation de la variable à condition concernant l'index de la photo face au total*/}
            <span className="indexPictures">{indexPictures}</span>
            <img
              src={logement.pictures[index]}
              alt={`Logement ${logement.title}`}
              className="picturesLogement active"
            ></img>
            {/* Utilisation de la variable à condition, concernant les fleches(slide)*/}
            {vectorOrnot}
          </div>
        )
      })}
    </div>
  )
}
export default Carrousel
