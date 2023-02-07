import React from 'react'
import { Link } from "react-router-dom"
import { Button, ProgressBar, Row, Col, Container } from 'react-bootstrap'
import { Input } from '../utils'


export default function PageOne() {
  const [Question, setQuestion] = React.useState(1)
  const totalQuestions = 3
  const next = async () => {

    if (Question < totalQuestions) {
      setQuestion(Question + 1)
    }
  }
  const back = async () => {

    if (Question > 1) {
      setQuestion(Question - 1)
    }
  }
  return (
    <>
      <Row>
        <Col>
      <ProgressBar now={Question / totalQuestions * 100}></ProgressBar>
      <br/>
      <h1>Question {Question}/3</h1>
      <hr></hr>
      <h1>the question</h1>
      <Input required
        placeHolder='Answer'
        type='textarea'
        rows='5'
        id='studentInput'
      />
          </Col>
        </Row>
      <Button as={Link} onClick={back}>Back</Button>
      <Button as={Link} onClick={next}>Next</Button>
    </>
  )
}