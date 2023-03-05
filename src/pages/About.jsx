import React from 'react'

export default function About() {
  console.log("secret",process.env.REACT_APP_SECRET_KEY)
  return (
    <div>About</div>
  )
}
