import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/general/header/Header'
import Home from './components/home/Home'
import About from './components/sobre-mi/About'
import Curriculum from './components/curriculum/Curriculum'

function App() {

  const [ home, setHome ] = useState(true)

  return (
    <Router>
      <div className="general__container">
        <Header home={home} />
        <Switch>
          <Route exact path="/portfolio" render={() => (<Home setHome={setHome} />)} />
          <Route exact path="/portfolio/sobre-mi" render={() => (<About setHome={setHome} />)} />
          <Route exact path="/portfolio/curriculum" render={() => (<Curriculum setHome={setHome} />)} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
