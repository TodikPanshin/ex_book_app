import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadBooks, updateBook } from '../store/books.actions'
import { bookService } from '../services/book.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export function Books() {
    const book = useSelector(storeState => storeState.booksModule.books)
    const [bookIdx, setBookIdx] = useState(0)
    const [checked, setChecked] = useState(book.isFavorite)





    useEffect(() => {
        loadBooks(bookIdx)
    }, [bookIdx, book.isFavorite])

    function handaleBookIdx(def) {
        setBookIdx(prevIdx => prevIdx + def)
    }

    async function handleCheckboxChange() {
        setChecked(prev => !prev)
        const updatedBook = { ...book, isFavorite: !book.isFavorite }
        try {
            await updateBook(updatedBook)
        }
        catch (err) {
            console.log('Cannot save Book', err)
        }
    }





    console.log('test book', book)
    if (!book && !book.length) return <div>Loading...</div>
    return (
        <>
            <div className='book-container'>
                {bookIdx !== 0 && <button className='back-btn' onClick={() => handaleBookIdx(-1)}><FontAwesomeIcon icon={faChevronLeft} size="xl" /> </button>}
                <article className="book-card">
                    <div className="card-header">
                        <div className='title-container'>
                            <h3 className='book-title'>{book.title}</h3>
                        </div>
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            checked={checked}
                            onChange={handleCheckboxChange}
                            defaultChecked={checked}

                        />
                    </div>
                    <hr></hr>
                    <h3 className='book-author'>{book.author}</h3>
                    <p>{book.description}</p>
                    <div className='rating'>
                        <span>Rating:</span>
                        <div>stars cmp</div>
                    </div>
                    <h3 className='price'>Price: $<span>{book.price}</span> </h3>
                </article >
                {bookIdx !== bookService.getBooksLength() - 1 && < button className='forward-btn' onClick={() => handaleBookIdx(+1)}><FontAwesomeIcon icon={faChevronRight} size="xl" /></button>}
            </div >
        </>
    )
}