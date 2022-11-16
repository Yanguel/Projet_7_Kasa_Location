// Import le fichier json mis à disposition.
import data from './../../data/data.json'
// Import le composant gérant les Cartes des logements.
import Card from '../../components/Card'
// Import des différents fichier css lié à la page.
import '../../styles/homePage.css'
import '../../styles/normalize.css'

// Fonction gérant l'affichage de la page d'acceuil.
function Home() {
  return (
    <div className="App">
      <section className="bannerImg">
        <span className="imgBannerHome"></span>
        <div className="divTextImg">
          <h1 className="textImg">Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className="cards">
        {/* Utilisation de map afin de récuperer les éléments souhaités dans le fichier json */}
        {data.map((logement, index) => {
          return (
            <Card
              key={index}
              id={logement.id}
              image={logement.cover}
              title={logement.title}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Home
