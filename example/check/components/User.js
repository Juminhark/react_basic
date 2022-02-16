import React from 'react'

export default function User({ name, username, email, phone}) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{username}</h4>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}
