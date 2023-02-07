import React from 'react'
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'

export default function PageOne() {
  const [count, setCount] = React.useState(0)

  const decrement = () => {
    setCount(count-1)
  }

  const increment = () => {
    setCount(count+1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>
      <Link to="/">Back to Home</Link>
    </>
  )
}
