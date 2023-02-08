import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Input } from '../utils'

export class SurveyDetails extends Component {
  continue = e => {
    e.preventDefault();
    console.log(values)
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container>
          <Input floating
            label='SurveyName:'
            type='text'
            id='surveyName'
            value={values.surveyName}
          />
          <Input floating
            label='Description:'
            type='text'
            id='description'
            value={values.description}
          />
          <Input floating
            label='Question1:'
            type='text'
            id='question1'
            value={values.question1}
          />
          <Input floating
            label='Question2:'
            type='text'
            id='question2'
            value={values.question2}
          />
          <Input floating
            label='Question3:'
            type='text'
            id='question3'
            value={values.question3}
          />

          <Button type="submit" onClick={this.continue}>
            Save
          </Button>
        </Container>
      </>
    )
  }

}


const styles = {
  button: {
    margin: 15

  }
}
export default SurveyDetails