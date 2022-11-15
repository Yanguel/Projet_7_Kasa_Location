import React from 'react'
// import du CSS lié aux carrousel
import '../../styles/carrousel.css'
// import des images "flèches"/switch
import leftArrow from '../../assets/vectorleft.png'
import rightArrow from '../../assets/vectorright.png'

// Fonction permettant de gerer le comportement des fleches
function BtnSlider({ direction, moveSlide }) {
  return (
    <div
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        className="arrow"
        src={direction === 'next' ? rightArrow : leftArrow}
        alt="arrow"
      ></img>
    </div>
  )
}
export default BtnSlider
