import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
/* FancyCol is at the bottom */

export default function PageThree() {
  return (
    <>
      <Container>
        <Row>
          <FancyCol className="col-9">1 of 2</FancyCol>
          <FancyCol>2 of 2</FancyCol>
        </Row>
        <Row style={{height: "200px"}}>
          <FancyCol className="d-flex 
 align-items-center justify-content-center">1 of 3</FancyCol>
          <FancyCol>2 of 3</FancyCol>
          <FancyCol className="col-6">3 of 3</FancyCol>
        </Row>
      </Container>
      <Link to="/">Go Home</Link>
    </>
  )
}

function FancyCol({className, children}) {
  return (
    <Col className={`border border-2 ${className}`} style={{'backgroundColor': 'var(--bs-gray-200)'}}>{children}</Col>
  )
}