import { bookService } from '../services/book.service.js'
import { store } from './store.js'

import {
    SET_BOOKS, UPDATE_BOOKS, SET_FILTER_BY
} from './books.reducer.js'


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
        .then(book => {
            console.log('Updated Book:', book)
            store.dispatch({
                type: UPDATE_BOOKS,
                book
            })
            return updateBook
        })
        .catch(err => {
            console.log('Cannot save Book', err)
            throw err
        })
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}

