import React, { useEffect, useState } from "react"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import data from "./randomUsers.json"

// const data = [
//   {
//     person: "",
//     id: 1,
//     image: ""
//   }
// ]

export default function(props) {
  const id = props.match.params.id

  const contacts = data.find(contactsId => contactsId.id == id)

  // const [name, setName] = useState("")
  // const [image, setImagesetName] = useState("")

  // useEffect(() =>

  //   setName(contacts.name)
  //   // setImage(contacts.image)
  // }, [])

  //add back arrow link arrow to home
  return (
    <div>
      <div>
        <img src={contacts.picture.large} />
      </div>
      <ul>
        <li>{contacts.name.first}</li>
        <li>{contacts.email}</li>
        <li>{contacts.phone}</li>
        <li>
          {contacts.location.city},{contacts.location.state}
        </li>
      </ul>
    </div>
  )
}
