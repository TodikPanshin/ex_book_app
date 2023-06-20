import { booksService } from '../services/books.service.js'
import { store } from './store.js'

import {
    SET_BOOKS,
} from './books.reducer.js'

// Action Creators:

export async function loadBooks() {
    try {
        const books = await booksService.query()
        store.dispatch({
            type: SET_BOOKS,
            books,
        })
    } catch (err) {
        console.log('Cannot load books', err)
        throw err
    }
}


