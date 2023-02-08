import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'
import { Form, Input } from '../utils'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
    <br/>
      <Input floating required
          label='Email:'
          type='email'
          id='email' />
        <Input floating
          label='First name:'
          type='text'
          id='firstName'
        />
        <Input floating
          label='Last name:'
          type='text'
          id='lastName'
        />
      
       <Input floating required
          label='State:'
          type='select'
          id='state'
        >
          <option key="0" value="nothing"></option>
          <option key="1" value="student">Student</option>
          <option key="2" value="teacher">Teacher</option>
        </Input>
    </>
  )
}
