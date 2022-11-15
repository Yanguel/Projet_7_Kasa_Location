// Import du logo de l'agence.
import Logo from '../../assets/logo.png'

// Import de l'outil qui permet de gerer les liens React.
import { Link } from 'react-router-dom'

// Import du CSS lié au header.
import '../../styles/header.css'

//Function qui permet de gerer le header présent sur toute les pages.
// Ainsi que ces hyperlien de navigation.
function Header() {
  return (
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="logo" />
      <nav className="navHome navHomeApropos">
        <Link to="/" className="navAcceuil">
          Accueil
        </Link>
        <Link to="/Apropos" className="navAPropos">
          A Propos
        </Link>
      </nav>
    </header>
  )
}
export default Header
