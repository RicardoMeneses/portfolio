import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/general/header/Header'
import Home from './components/home/Home'

function App() {
  return (
    <Router>
      <div className="general__container">
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
