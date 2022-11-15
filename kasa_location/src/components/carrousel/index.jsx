import '../../styles/carrousel.css'
import { useParams } from 'react-router-dom'
import data from '../../data/data.json'
import BtnSlider from './btnSlider'
import { useState } from 'react'

export default function Slider() {
  let { id } = useParams()
  // Cette variable me permet de chercher un élement lié à l'id utilisé dans le format json.
  const logement = data.find((elt) => elt.id === id)
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== logement.pictures.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === logement.pictures.length) {
      setSlideIndex(1)
    }
  }
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

  return (
    <div className="container-slider">
      {logement.pictures.map((obje, index) => {
        return (
          <div
            className={
              slideIndex === index + 1 ? 'slide active-anim' : 'slide '
            }
            key={id + index}
          >
            <span className="indexPictures">{indexPictures}</span>
            <img
              src={logement.pictures[index]}
              alt={`Logement ${logement.title}`}
              className="picturesLogement active"
            ></img>
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />
          </div>
        )
      })}
    </div>
  )
}
