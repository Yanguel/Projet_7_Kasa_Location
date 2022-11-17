// Importe les différents outils de React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importe React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Importe les différentes pages
import Home from './pages/Home'
import Error from './pages/Error'
import Apropos from './pages/apropos'
import Logement from './pages/logement'
// Importe les différents composants
import Header from './components/Header'
import Footer from './components/Footer'

// Importe le fichier CSS de normalize pour un bon comportement.
import './styles/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      {/* Switch Affiche la 1ere route dont le chemin correspond et on ajoute la route Error */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/A-Propos">
          <Apropos />
        </Route>
        <Route path="/fiche_logement/:id">
          <Logement />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
)
