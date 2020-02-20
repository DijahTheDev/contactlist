import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import Contacts from "./Contacts"
import "./App.css"

export default function() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contacts/:id" component={Contacts} />
      </div>
    </Router>
  )
}
