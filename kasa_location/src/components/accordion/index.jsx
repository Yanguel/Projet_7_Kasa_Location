import React from 'react'

// Import du CSS lié à l'accordion
import '../../styles/accordion.css'

// fonction/Hook permettant d'ajouter l'état local à des fonctions composants
import { useState } from 'react'

// Récupération des l'icones voulu via fontawesomes
;<script
  src="https://kit.fontawesome.com/e4ab2d9fc1.js"
  crossorigin="anonymous"
></script>

//Fonction permettant de creer les accordions ainsi que les icones.
function Accordion({ title, content }) {
  const [active, setActive] = useState(false) // Par défaut ils seront fermés.

  // Fonction qui active l'élément
  const handleToggle = (e) => {
    setActive(!active)
  }

  return (
    <div className={`accordion ${active && 'active'}`}>
      {/* Au click active l'accordeons*/}
      <div className="accordionTitle" onClick={handleToggle}>
        {title}
        <span className="accordionIcon">
          <i className="fa-sharp fa-solid fa-chevron-down fa-lg "></i>
        </span>
      </div>
      <div className="accordionContent">{content}</div>
    </div>
  )
}
export default Accordion
