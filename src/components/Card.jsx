import React from 'react';

const Card = ({ contact }) => {
  // Could be done above as well { { login, name, bio, avatarUrl } }) {
  const { login, name, bio, avatarUrl } = contact;

  return (
    <div>
      <h2>{login}</h2>
      <h5>{name}</h5>
      <img src={avatarUrl} alt={name} />
      <p>{bio}</p>
    </div>
  );
};

export default Card;

