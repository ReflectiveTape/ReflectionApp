import React, { Component } from 'react'
import SurveyDetails from './SurveyDetails'

export class SurveyModel extends Component {
  state = {
    steps: 1,
    surveyName: '',
    description: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
  }

  // HANDLES ANY INPUT CHANGE
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(this.state)
  }

  render() {
    const { step } = this.state;
    const { surveyName, description, difficultySlider, question1, question2, question3, question4 } = this.state;
    const values = { surveyName, description, difficultySlider, question1, question2, question3, question4 }


    return (
      <SurveyDetails
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
      />
    )
  }
}


export default SurveyModel
