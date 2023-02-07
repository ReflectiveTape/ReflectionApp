import React from 'react'
import Utils, { Hooks, ErrorAlert, Form, Input  } from '../utils'
import { Button, Stack } from 'react-bootstrap'

export default function Todo() {
  const db = Hooks.useDatabase('team_x', 'todo_items')
  const [items, setIitems] = React.useState([])

  const refreshItems = async () => {
    const data = await db.fetchAll()
    setIitems(data)
  }

  Utils.onMount(refreshItems);

  const insertItem = async (value) => {
    const item = { theTodoText: value }
    await db.insertOne(item)
    refreshItems()
  }

  const deleteItem = async (item) => {
    await db.deleteOne(item);
    refreshItems();
  }

  const makeTodoListItem = (item) => (
    <TodoItem key={item._id} iteeem={item} remooove={deleteItem} />
  )

  return (
    <>
      <ErrorAlert error={db.error} />
      <h5>Make your own questions!</h5>
      {items ? items.map(makeTodoListItem) : null}
      <TodoInput submit={insertItem} />
    </>
  )
}


function TodoInput({ submit }) {
  const handleSubmit = async (data, form) => {
    const text = data['todoText']
    if (text && text.length > 0) {
      submit(text)
      form.reset()
    }
  }
  
  return (
    <>
      <Form className={'col m-0'} onSubmit={handleSubmit}>
        <Input type='text' className='m-0'
          placeholder='Question 1'
          id='Question1'
        />
      </Form>
    </>
  )
}

function TodoItem({ item, remove }) {
  return (
    <>
      <Stack direction='horizontal' className='mb-1'>
        <span className={'col mx-2'}>{item.theTodoText}</span>
        <Button className='btn-close' onClick={() => remove(item)} />
      </Stack>
    </>
  )
}