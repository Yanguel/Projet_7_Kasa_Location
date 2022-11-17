import React from 'react'

// Import des images
import Star from '../../assets/Star.png'
import StarEmpty from '../../assets/StarEmpty.png'

//Fonction permettant de calculer le nombre d'étoile vide et remplit
function Rate({ logementRating }) {
  //Création du tableau du nombre maximum d'étoile
  const arrayRating = [1, 2, 3, 4, 5]
  return (
    <div className="stars">
      {arrayRating.map((ratingElem) =>
        logementRating >= ratingElem ? (
          <img
            src={Star}
            key={ratingElem.toString()} /* "toString" renvoi une chaine de caractère*/
            alt="étoile rempli"
            className="starsSize"
          />
        ) : (
          <img
            src={StarEmpty}
            key={ratingElem.toString()}
            alt="étoile vide"
            className="starsSize"
          />
        )
      )}
    </div>
  )
}

export default Rate
