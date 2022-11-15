// Import du logo de l'agence.
import logoKasaWhite from '../../assets/logoWhite.png'

//Import du CSS lié au footer
import '../../styles/footer.css'

// Function permettant de créer le footer présent sur toutes les pages
function Footer() {
  return (
    <footer>
      <div className="imgEtText">
        <img
          src={logoKasaWhite}
          className="logoKasaWhite"
          alt="logo Kasa Location"
        />
        <p className="rightReserved"> © 2020 Kasa. All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer
