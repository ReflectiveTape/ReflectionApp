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
          
        </Row>
      </Container>
      <Link to="/">Back</Link>
    </>
  )
}

function FancyCol({className, children}) {
  return (
    <Col className={`border border-2 ${className}`} style={{'backgroundColor': 'var(--bs-gray-200)'}}>{children}</Col>
  )
}