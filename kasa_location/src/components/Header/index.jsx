import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

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
