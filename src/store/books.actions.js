import { bookService } from '../services/book.service.js'
import { store } from './store.js'

import {
    SET_BOOKS, UPDATE_BOOKS
} from './books.reducer.js'

// Action Creators:

export async function loadBooks(idx) {
    try {
        const books = await bookService.query(idx)
        store.dispatch({
            type: SET_BOOKS,
            books,
        })
    } catch (err) {
        console.log('Cannot load books', err)
        throw err
    }
}


export async function updateBook(book) {
    return bookService.save(book)
        .then(savedBook => {
            console.log('Updated Book:', savedBook)
            store.dispatch({
                type: UPDATE_BOOKS,
                book
            })
            return savedBook
        })
        .catch(err => {
            console.log('Cannot save Book', err)
            throw err
        })
}


