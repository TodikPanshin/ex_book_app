export const SET_BOOKS = 'SET_BOOKS'
export const UPDATE_BOOKS = 'UPDATE_BOOKS'


const initialState = {
    books: []
}

export function booksReducer(state = initialState, action) {
    var newState = state
    var books

    switch (action.type) {
        case SET_BOOKS:
            newState = { ...state, books: action.books }
            break
            case UPDATE_BOOKS:
                books = state.books.map(book => (book._id === action.book._id) ? action.book : book)
                newState = { ...state, books }
                break

        default:
        // return newState
    }

    return newState
}
