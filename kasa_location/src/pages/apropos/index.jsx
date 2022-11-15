import React from 'react'
//import imgApropos from '../../assets/imageApropos.png'
import '../../styles/aproposPage.css'
import Accordion from '../../components/accordion'
import '../../styles/accordion.css'
// import Vectordown from '../../assets/Vectordown.png'
function Apropos() {
  return (
    <section className="containerApropos">
      <div className="bannerApropos">
        <span className="imgBanner"></span>
      </div>
      <div className="centerAccordions">
        <div className="accordions">
          <Accordion
            title={<p className="titleAccordion">Fiabilité</p>}
            content={
              <p className="contentApropos">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            }
          />
          <Accordion
            title={<p className="titleAccordion">Respect</p>}
            content={
              <p className="contentApropos">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            }
          />
          <Accordion
            title={<p className="titleAccordion">Service</p>}
            content={
              <p className="contentApropos">
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            }
          />
          <Accordion
            title={<p className="titleAccordion">Sécurité</p>}
            content={
              <p className="contentApropos">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            }
          />
        </div>
      </div>
    </section>
  )
}

export default Apropos
