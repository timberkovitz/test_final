import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container">
      <h1>HomeHub</h1>
      <p>
        <a href={'/taniarascia'}>Press to WIN </a> on HomeHub.
      </p>
    </div>
  )
}
