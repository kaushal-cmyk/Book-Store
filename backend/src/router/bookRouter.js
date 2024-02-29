import { Router } from "express";
import { createBook, deleteBook, readBook, readSpecificBook, updateBook } from "../controller/bookController.js";


let bookRouter = Router()
bookRouter 
.route('/')
.post(createBook)
.get(readBook)

bookRouter
.route("/:id")
.get(readSpecificBook)
.patch(updateBook)
.delete(deleteBook)

export default bookRouter