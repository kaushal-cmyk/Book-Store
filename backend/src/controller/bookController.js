import { Book } from "../model/bookModel.js"

// create book 
export let createBook = async(req, res)=> {
    let bookData = req.body
    try {
        let result = await Book.create(bookData)
        res.status(201).json({
            success: true,
            message: "Book created successfully."
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })        
    }
}

// read book
export let readBook = async (req, res)=> {
    try {
        let result = await Book.find({})
        res.status(200).json({
            success: true,
            message: "book read successfully.",
            count: Book.length,
            data : result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// read specific book
export let readSpecificBook = async (req, res)=> {
    
    let id = req.params.id
    try {
        let result = await Book.findById(id)
        res.status(200).json({
            success: true,
            message: "book read successfully.",
            data: result
        })        
    } catch (error) {
        
    }
}

//update book
export let updateBook = async(req, res)=> {
    let id = req.params.id
    let data = req.body
    try {
        let result = await Book.findByIdAndUpdate(id, data, {new : true})

        res.status(201).json({
            success: true,
            message: "book updated successfully.",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// delete book
export let deleteBook = async (req, res)=> {
    let id = req.params.id
    try {
        let result = await Book.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Book deleted successfully.",
            result: result
        })        
    } catch (error) {
        res.status(400).json({
            success: false,
            result: error.message
        })       
    }
}