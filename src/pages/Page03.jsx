import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default function PageThree() {

  return (
    <>
      <h1>Page Three</h1>
      <Button as={Link} to="/">Go Home</Button>
    </>
  )
}