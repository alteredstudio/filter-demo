import React from 'react'
const Card = ({ contact }) => (
  <div>
    <h2>{contact.login}</h2>
    <h5>{contact.name}</h5>
    <img src="{contact.avatar_url}"/>
    <p>{contact.bio}</p>
  </div>
)

export default Card
