export const SET_BOOKS = 'SET_BOOKS'


const initialState = {
    books: []
}

export function boardReducer(state = initialState, action) {
    var newState = state
    var books

    switch (action.type) {
        case SET_BOOKS:
            newState = { ...state, books: action.boards }
            break


        default:
        // return newState
    }

    return newState
}
