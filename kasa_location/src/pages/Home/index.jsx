import data from './../../data/data.json'
import Card from '../../components/Card'
import '../../styles/homePage.css'
import '../../styles/normalize.css'

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
        {data.map((property, index) => {
          return (
            <Card
              key={index}
              id={property.id}
              image={property.cover}
              title={property.title}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Home
