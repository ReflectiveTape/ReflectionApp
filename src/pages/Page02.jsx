import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default function PageTwo() {

  return (
    <>
      <h1>Page Two</h1>
      <Button as={Link} to="/">Go Home</Button>
    </>
  )
}