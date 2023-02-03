import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button as={Link} to="/page-oone">Go to Page One</Button>
    </>
  )
}
