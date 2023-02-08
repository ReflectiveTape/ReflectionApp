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
  handleChange = textarea => e => {
    this.setState({ [textarea]: e.target.value });
    console.log(this.state)
  }

  render() {
    const { surveyName, description, difficultySlider, question1, question2, question3, question4 } = this.state;
    const values = { surveyName, description, difficultySlider, question1, question2, question3, question4 }

    return (
      <>
        <Container >
          <Container className="titleCN">
            <input
              placeholder="Title"
              type='text'
              id='surveyName'
              defaultValue={this.surveyName}
              onChange={this.handleChange('surveyName')}
            />
            <input
              placeholder="Description"
              type='text'
              id='description'
              defaultValue={this.description}
              onChange={this.handleChange('description')}
            />
          </Container>
          <div className="splitter" ></div>


          <Container className="itemCN" >
            <div classname="top" >
              <h2>Q1</h2>
            </div>
            <div className="btm">
              <label for="question1">
                Question
              </label>
              <textarea floating
                type='text'
                id='question1'
                defaultValue={this.question1}
                onChange={this.handleChange('question1')}
              />
            </div>
          </Container>

          <Container className="itemCN" >
            <div classname="top" >
              <h2>Q2</h2>
            </div>
            <div className="btm">
              <label for="question2">
                Question
              </label>
              <textarea floating
                type='text'
                id='question2'
                defaultValue={this.question2}
                onChange={this.handleChange('question2')}
              />
            </div>
          </Container>
          <Container className="itemCN" >
            <div classname="top" >
              <h2>Q3</h2>
            </div>
            <div className="btm">
              <label for="question1">
                Question
              </label>
              <textarea floating
                type='text'
                id='question3'
                defaultValue={this.question3}
                onChange={this.handleChange('question3')}
              />
            </div>
          </Container>
          <Container className="itemCN" >
            <div classname="top" >
              <h2>Q4</h2>
            </div>
            <div className="btm">
              <label for="question1">
                Question
              </label>
              <textarea floating
                type='text'
                id='question4'
                defaultValue={this.question4}
                onChange={this.handleChange('question4')}
              />
            </div>
          </Container>



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