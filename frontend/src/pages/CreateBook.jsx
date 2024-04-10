import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CreateBook = () => {
  let [book, setBook] = useState()

  let [title, setTitle] = useState('')
  let [author, setAuthor] = useState('')
  let [publishYear, setPublishYear] = useState('')

  // create a book
  useEffect(()=> {
    axios
    .post(`http://localhost:8000/books`)
    .then((response)=> {
      console.log(response)
    })
  }, [])
  return (
    <div>CreateBook</div>
  )
}

export default CreateBook