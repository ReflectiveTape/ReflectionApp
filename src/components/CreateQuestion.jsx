import {Container, Button} from 'react-bootstrap/Container'
import { Input, Form, ObjectInspector } from '../utils'

export default function CreateQuestion() {
  return (
    <>
      <h1> Helo</h1>
      <Container >
        <Form>
          <div>
            <Button>1</Button>
          </div>
          <Input required 
            label='Question'
            type='text'
            id='question'/>
          
        </Form>
      </Container>
    </>
  )
 
}