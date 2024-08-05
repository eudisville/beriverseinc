import React from 'react'
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Card from '../components/Card'
import Team from '../components/Team'
import Blog from '../components/Blog'
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
                <div className="top"></div>
                <div className="bottom">
                  <h3>Eudes-Mondesir <span>KOFFI</span></h3>
                  <h5>Head of Software</h5>
                </div>
              </Team>

              <Team className="background1">
                <div className="top"></div>
                <div className="bottom">
                  <h3>Tresor <span>OUPHOUET</span></h3>
                  <h5>Head of Cybersecurity</h5>
                </div>
              </Team>

            </div>
          </div>
        </section>

        <section className='join-us'>
          <div className="join">
            <h1>Join Us Now</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam optio vel recusandae ullam consequatur, minus, similique voluptates adipisci sequi odit, laudantium nostrum ratione temporibus placeat dignissimos ab accusamus veniam. Maxime.</p>
            <button>Apply Now</button>
          </div>
        </section>

        <section className='blog'>
          <div className="blog-items">
            <h1>Stay up to date on our latest news</h1>
            <p>We regularly share updates about our company, the development of the Amini platform, and research to advance our mission to becoming the single source of truth for African environmental data.</p>
            <div className="blog-item">
              <Blog className="back1">
                <h5>NEWS</h5>
                <h4>Artificial Intelligence</h4>
              </Blog>
              <Blog className="back2">
                <h5>RESEARCH</h5>
                <h4>Data Science</h4>
              </Blog>
              <Blog className="back3">
                <h5>NEWS</h5>
                <h4>Agriculture Technology</h4>
              </Blog>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home