import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import { createBook } from '../../backend/src/controller/bookController'
import CreateBook from './pages/CreateBook'
import ReadBook from './pages/ReadBook'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path = '/' element = {<div><Outlet></Outlet></div>}>
          <Route index element = {<Home></Home>}></Route>

          {/* pages */}
          <Route path = '/books/create' element = {<CreateBook></CreateBook>}></Route>
          {/* <Route path = '/books/details' element = {<ReadBook></ReadBook>}></Route> */}
          <Route path = '/books/details/:id' element = {<ShowBook></ShowBook>}></Route>
          <Route path = '/books/edit/:id' element = {<UpdateBook></UpdateBook>}></Route>
          <Route path = '/books/delete/:id' element = {<DeleteBook></DeleteBook>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App