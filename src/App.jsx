import React from 'react'
import { Routes, Route } from "react-router-dom"

/*** Pages ***/
import Home from './pages/Home'
import PageOne from './pages/Page01'
import PageTwo from './pages/Page02'
import PageThree from './pages/Page03'
import Counter from './pages/ExampleCounter'
import Layout from './pages/ExampleLayout'
import Todo from './pages/ExampleTodo'

/*** Components ***/
import NavBar from './components/NavBaar'

export default function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-oone" element={<PageOne />} />
        <Route path="/page-twooo" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
        <Route path="/counter-example" element={<Counter />} />
        <Route path="/layout-example" element={<Layout />} />
        <Route path="/todo-example" element={<Todo />} />
      </Routes>
    </>
  )
}