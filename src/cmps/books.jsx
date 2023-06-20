import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadBooks, updateBook } from '../store/books.actions'
import { bookService } from '../services/book.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronRight ,faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export function Books() {
    const book = useSelector(storeState => storeState.booksModule.books)
    const [bookIdx, setBookIdx] = useState(0)
    const [checked, setChecked] = useState(book.isFavorite)





    useEffect(() => {
        loadBooks(bookIdx)
    }, [bookIdx,checked])

    function handaleBookIdx(def) {
        setBookIdx(prevIdx => prevIdx + def)
    }

    async function handleCheckboxChange() {
        setChecked(prev=>!prev)
        const updatedBook = { ...book, isFavorite: checked }
        try {
            await bookService.save(updatedBook)
        }
        catch (err) {
            console.log('Cannot save Book', err)
        }
    }


    console.log('test book', book)
    if (!book&&!book.length) return <div>Loading...</div>
    return (
        <>

            <article className="book-card">
                <div className="card-header">
                    <h3>{book.title}</h3>
                    <input
                        type="checkbox"
                        id=""
                        name=""
                        checked={book.isFavorite}
                        onChange={handleCheckboxChange} 
                    />
                </div>
                <hr></hr>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
                <div>
                    <span>Rating:</span>
                    <div>stars cmp</div>
                </div>
                <h3>Price: $<span>{book.price}</span> </h3>
            </article >
            
            {bookIdx !== 0 && <button onClick={() => handaleBookIdx(-1)}><FontAwesomeIcon icon={faChevronLeft} /> </button>}
            {bookIdx !== bookService.getBooksLength() && <button onClick={() => handaleBookIdx(+1)}><FontAwesomeIcon icon={faChevronRight} /></button>}
        </>
    )
}