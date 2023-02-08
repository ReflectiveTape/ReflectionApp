import React, { useState } from "react";
import SurveyModel from '../components/SurveyModel'
import { Row, Col, Button, Container } from 'react-bootstrap'


export default function SurveyManager() {

  return (
    <>
      <Row>
        <Col lg="3" className="sidebar">
          <Container>
            <Button>Create New Survey</Button>
          </Container>
        </Col>
        <Col>
          <Container className="middle">
            <SurveyModel />
          </Container>
        </Col>
      </Row>
    </>
  )
}

