import React, { useEffect } from 'react'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import './home.css'

const Home = ({setHome}) => {

  useEffect(() => {
    setHome(true)
  }, [setHome])

  return (
    <div className="home__container">
      <div className="container-fluid h-100">
        <div className="row home__row">
          <div className="col-12">
            <div className="home__main-text">
              <h1 className="text-center">"Piensa siempre cómo podrías hacer mejor las cosas y cuestiónate a ti mismo." <span>Elon Must</span></h1>
            </div>
          </div>
          <div className="col-8">
            <h1 className="home__text-wb">Desarrollador WEB</h1>
          </div>
          <div className="col-4">
            <div className="home__social-media">
              <a href="https://www.linkedin.com/in/ricardo-meneses-morales/"><img src={linkedin} width="60" alt=""/></a>
              <a href="https://github.com/RicardoMeneses"><img src={github} width="45" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )  
}

export default Home