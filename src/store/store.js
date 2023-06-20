import { legacy_createStore as createStore, combineReducers } from 'redux'
import { booksReducer } from './books.reducer.js'


const rootReducer = combineReducers({
    booksModule: booksReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : undefined
export const store = createStore(rootReducer, middleware)

store.subscribe(() => {
    // console.log('**** Store state changed: ****')
    // console.log('storeState:\n', store.getState())
    // console.log('*******************************')
})
