import React from 'react'
import { Link } from "react-router-dom"
import { Button, ProgressBar } from 'react-bootstrap'
import { Input } from '../utils'

export default function PageThree() {

  return (
    <>
      <ProgressBar now="99.99999999999" Lable="%99.9999 done"></ProgressBar>
      <h1>Question 3/3</h1>
      <h1>{FormData.Question3}</h1>
      <Input required
        placeHolder='Answer'
        type='textarea'
        rows='5'
        id='studentInput'
      />
      <Button as={Link} to="/page-twooo">Back</Button>
      <Button as={Link} to="/">Next</Button>
    </>
  )
}