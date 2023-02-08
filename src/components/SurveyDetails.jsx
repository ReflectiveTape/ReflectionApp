import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Input } from '../utils'
import SurveyItem from './SurveyItem'
import SurveyModel from './SurveyModel'
import './styles/SurveyItemComponent.css'

export class SurveyDetails extends Component {
  state = {
    steps: 1,
    surveyName: '',
    description: '',
    question1: {
      type: '',
      value: ''
    },
    question2: '',
    question3: '',
    question4: '',
  }

  continue = e => {
    e.preventDefault();
    console.log(this.state)
  }
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(this.state)
  }

  render() {
    const { surveyName, description, difficultySlider, question1, question2, question3, question4 } = this.state;
    const values = { surveyName, description, difficultySlider, question1, question2, question3, question4 }

    return (
      <>
        <Container >
          <Container className="itemCN">
            <Input floating
              label='SurveyName:'
              type='text'
              id='surveyName'
              defaultValue={this.surveyName}
              onChange={this.handleChange('surveyName')}
            />
          </Container>
          <Input floating
            label='Description:'
            type='text'
            id='description'
            defaultValue={this.description}
            onChange={this.handleChange('description')}
          />
          <Input floating
            label='Question1:'
            type='text'
            id='question1'
            defaultValue={this.question1}
            onChange={this.handleChange('question1')}
          />
          <Input floating
            label='Question2:'
            type='text'
            id='question2'
            defaultValue={this.question2}
            onChange={this.handleChange('question2')}
          />
          <Input floating
            label='Question3:'
            type='text'
            id='question3'
            defaultValue={this.question3}
            onChange={this.handleChange('question3')}
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