import React, { useEffect } from 'react'
import me from '../../assets/me.jpg'
import CV from '../../assets/CV.pdf'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import iconReact from '../../assets/react.svg'
import iconVue from '../../assets/vuejs.svg'
import iconNode from '../../assets/nodejs.svg'
import iconCss from '../../assets/css3.svg'
import iconHtml from '../../assets/html5.svg'
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
                  <div className="col-12 col-md-6 text-center text-md-left">
                    <h2>Sobre Mí</h2>
                    <p>
                      Soy un hombre en busca de mejorar mis habilidades, 
                      cuento con dos años de experiencia en desarrollo web
                      utilizando frameworks como Vue.js, Node.js, React.
                    </p>
                    <div className="about__tecnologies text-center">
                      <img src={iconReact} alt="react" width="35" />
                      <img src={iconVue} alt="vue" width="40" />
                      <img src={iconNode} alt="node" width="40" />
                      <img src={iconCss} alt="css" width="40" />
                      <img src={iconHtml} alt="html" width="40" />
                      <a href={CV} download="RicardoMenesesMorales.pdf" className="btn btn-success ml-0 ml-lg-5">Descargar CV</a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mt-3 mt-md-0">
                    <p className="m-1 m-md-3"><b>Edad:</b> 27 años</p>
                    <p className="m-1 m-md-3"><b>Correo:</b> ricardomeneses0503@gmail.com</p>
                    <p className="m-1 m-md-3"><b>Tel:</b> 5577197085</p>
                    <p className="m-1 m-md-3"><b>Domicilio:</b> Atizapan Zaragoza, Estado de México.</p>
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