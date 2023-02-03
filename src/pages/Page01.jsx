import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default function PageOne() {

  return (
    <>
      <h1>Page One</h1>
      <Button as={Link} to="/">Go Home</Button>
    </>
  )
}