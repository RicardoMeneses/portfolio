import React, { useEffect } from 'react'
import './curriculum.css'

const Curriculum = ({setHome}) => {

  useEffect(() => {
    setHome(false)
  }, [setHome])

  return (
    <section className="curriculum__container">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="curriculum__card-container">
              <div className="curriculum__card-above">
                <div className="row">
                  <div className="col-12">
                    <h1 className="text-center text-white text-uppercase">Currículum</h1>
                  </div>
                </div>
              </div>
              <div className="curriculum__card-below">
                <div className="row">
                  <div className="col-6">
                    <h1 className="text-center">Educación</h1>
                    <div className="curriculum__card__history">
                      <p>2013 - 2020</p>
                      <p>Ingeniería en Sistemas Computacionales</p>
                      <p>Escuela Superior de Cómputo</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <h1 className="text-center">Experiencia Laboral</h1>
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

export default Curriculum