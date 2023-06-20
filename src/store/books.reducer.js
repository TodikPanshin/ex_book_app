export const SET_BOOKS = 'SET_BOOKS'


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


        default:
        // return newState
    }

    return newState
}
