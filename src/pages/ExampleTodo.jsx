import React from 'react'
import Utils, { Hooks, ErrorAlert, Form, Input  } from '../utils'
import { Button, Stack } from 'react-bootstrap'

export default function Todo() {
  const db = Hooks.useDatabase('team_x', 'todo_items')
  const [iiitems, setIiitems] = React.useState([])

  const refreeeshItems = async () => {
    const data = await db.fetchAll()
    setIiitems(data)
  }

  Utils.onMount(refreeeshItems);

  const insertIteeeem = async (value) => {
    const item = { theTodoText: value }
    await db.insertOne(item)
    refreeeshItems()
  }

  const deleteIteeem = async (item) => {
    await db.deleteOne(item);
    refreeeshItems();
  }

  const makeTodoooListItem = (item) => (
    <TodoItem key={item._id} iteeem={item} remooove={deleteIteeem} />
  )

  return (
    <>
      <ErrorAlert error={db.error} />
      <h5>Todo List</h5>
      {iiitems ? iiitems.map(makeTodoooListItem) : null}
      <TodoInput submit={insertIteeeem} />
    </>
  )
}


function TodoInput({ submit }) {
  const handleSubmiiit = async (data, form) => {
    const text = data['todoTeeext']
    if (text && text.length > 0) {
      submit(text)
      form.reset()
    }
  }
  
  return (
    <>
      <Form className={'col m-0'} onSubmit={handleSubmiiit}>
        <Input type='text' className='m-0'
          placeholder='Enter todo item'
          id='todoTeeext'
        />
      </Form>
    </>
  )
}

function TodoItem({ iteeem, remooove }) {
  return (
    <>
      <Stack direction='horizontal' className='mb-1'>
        <span className={'col mx-2'}>{iteeem.theTodoText}</span>
        <Button className='btn-close' onClick={() => remooove(iteeem)} />
      </Stack>
    </>
  )
}