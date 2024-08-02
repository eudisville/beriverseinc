import React from 'react'
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Card from '../components/Card'
import Team from '../components/Team'
import './style.css'

function Home() {
  return (
    <div>
        <Header />
        <About />
        <section>
          <div className="section-items">
            <div className="section-text">
              <div className="left">
                <h5>Beriverse Incorporation</h5>
                <h1>Beriverse solving major problems of our world</h1>
              </div>

              <div className="right">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. A temporibus quia quo eveniet molestias atque 
                  voluptas magni laboriosam labore. Pariatur magni 
                  maiores obcaecati mollitia eius officiis cupiditate
                  excepturi, doloremque dolorem.</p>
              </div>
            </div>

            <div className="cards">
              <Card backgroundColor='rgb(0, 78, 126)'>
                <div className="item-left"></div>
                <div className="item-right"></div>
              </Card>
            </div>
          </div>
        </section>

        <section className="teams">
          <div className="team">
            <div className="team-text">
              <h5>BERIVERSE TEAM</h5>
              <h1>Discover Our Direction Team</h1>
            </div>

            <div className="team-items">

              <Team className="background1">
                <div className="top">
                  <h5>Software Engineer</h5>
                </div>
                <div className="bottom">
                  <h3>Eudes-Mondesir <span>KOFFI</span></h3>
                </div>
              </Team>

              <Team className="background1">
                <div className="top">
                  <h5>Software Engineer</h5>
                </div>
                <div className="bottom">
                  <h3>Tresor <span>OUPHOUET</span></h3>
                </div>
              </Team>

            </div>
          </div>
        </section>
    </div>
  )
}

export default Home