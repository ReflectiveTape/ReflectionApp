import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'
import CreateQuestion from '../components/CreateQuestion'

export default function PageTwo() {

  return (
    <>
      <h1>Survey Creator</h1>
      <Button as={Link} to="/">Go Home</Button>
      <CreateQuestion />

    </>
  )
}