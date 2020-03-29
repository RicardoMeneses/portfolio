import React, { useEffect } from 'react'
import me from '../../assets/me.jpg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import './about.css'

const About = ({setHome}) => {

  useEffect(() => {
    setHome(false)
  }, [setHome])

  return (
    <section className="about__container">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12">
            <div className="about__card-container">
              <div className="about__card-above">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <div className="about__card__img-container">
                      <img src={me} alt="Ricardo Meneses" className="about__card__img" />
                    </div>
                  </div>
                  <div className="col-12 col-md-8 align-self-center text-center text-white">
                    <h2 className="m-0">Ricardo Meneses Morales</h2>
                    <p className="m-0">Desarrollador WEB</p>
                    <div className="about__social-media">
                      <a href="https://www.linkedin.com/in/ricardo-meneses-morales/"><img src={linkedin} width="60" alt=""/></a>
                      <a href="https://github.com/RicardoMeneses"><img src={github} width="45" alt=""/></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about__card-below">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h2>Sobre Mí</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione quam ducimus numquam aut quia quod, labore omnis nam dolores beatae ab exercitationem libero animi maiores pariatur harum. Fuga, aperiam?</p>
                  </div>
                  <div className="col-12 col-md-6">
                    <p><b>Edad:</b> 27 años</p>
                    <p><b>Correo:</b> ricardomeneses0503@gmail.com</p>
                    <p><b>Tel:</b> 5577197085</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About