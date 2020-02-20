import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import data from "../randomUsers.json"

export default function(props) {
  return (
    <div>
      <header>
        <h1> My Peeps</h1>
      </header>
      {data.map(contacts => (
        <Link to={`/Contacts/${contacts.id}`}>
          <div className="contact">
            <img alt="user" src={contacts.picture.thumbnail} />
            <div className="firstname">{contacts.name.first}</div>
            <div className="lastname">{contacts.name.last}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
