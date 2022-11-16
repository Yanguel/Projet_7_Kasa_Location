// Import du fichier css lié à la page Error
import '../../styles/errorPage.css'

// Import de la fonction Link qui gere les hyperliens sous React.
import { Link } from 'react-router-dom'

// Création de la fonction Error afin de créer la page Error
function Error() {
  return (
    <div className="containerError">
      <h1 className="error">404</h1>
      <h2 className="textError">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <div className="link">
        <p className="linktext">
          <Link to="/">Retourner sur la page d'acceuil</Link>
        </p>
      </div>
    </div>
  )
}

export default Error
