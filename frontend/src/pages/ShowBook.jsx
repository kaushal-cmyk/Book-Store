import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'

const ShowBook = () => {

    let [book, setBook] = useState({})
    let [loading, setLoading] = useState(false)
    let { id } = useParams()

    useEffect(()=> {
        axios
        .get(`http://localhost:8000/books/${id}`)
        .then((response)=> {
            setBook(response.data.data)
            setLoading(false)
        })
        .catch((error)=> {
            console.log(error)
        })
    }, [])


  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Show Book</h1>
        {loading ? (
            <Spinner/>
        ): (
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Id</span>
                    <span>{book._id}</span>
                </div>

                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Title</span>
                    <span>{book.title}</span>
                </div>

                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Author</span>
                    <span>{book.author}</span>
                </div>

                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                    <span>{book.publishYear}</span>
                </div>

                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Create Time</span>
                    <span>{new Date(book.createdAt).toLocaleDateString()}</span>
                </div>

                <div className='my-4'>
                    <span className='text-xl mr-4 text-gray-500'>Last Updated time</span>
                    <span>{new Date(book.updatedAt).toLocaleDateString()}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default ShowBook