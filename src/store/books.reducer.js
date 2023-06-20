export const SET_BOOKS = 'SET_BOOKS'
export const UPDATE_BOOKS = 'UPDATE_BOOKS'
export const SET_FILTER_BY = 'SET_FILTER_BY'


const initialState = {
    books: [],
    favoriteBooks: [],
    filterBy: {
        idx: '',
        price: '',
        rating: '',
    }
}

export function booksReducer(state = initialState, action) {



    switch (action.type) {
        case SET_BOOKS:
            return { ...state, books: action.books }
            
        case UPDATE_BOOKS:
            return { ...state, books: action.books }
            
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
            break
        default:
            return state
    }
}
