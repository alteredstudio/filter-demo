import React from 'react';

const Card = ({ contact: { login, name, bio, avatarUrl } }) => (
  <div>
    <h2>{login}</h2>
    <h5>{name}</h5>
    <img src={avatarUrl} alt={name} />
    <p>{bio}</p>
  </div>
);

export default Card;

