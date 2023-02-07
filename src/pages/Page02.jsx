import React from 'react'
import { Link } from "react-router-dom"
import { Button, ProgressBar } from 'react-bootstrap'
import { Input } from '../utils'

export default function PageTwo() {

  return (
    <>
      <ProgressBar now="66.66666" Lable="%66 done"></ProgressBar>
      <h1>Question 2/3</h1>
      <h1>{FormData.Question2}</h1>
      <Input required
        placeHolder='Answer'
        type='textarea'
        rows='5'
        id='studentInput'
      />
      <Button as={Link} to="/page-oone">Back</Button>
      <Button as={Link} to="/page-three">Next</Button>
    </>
  )
}