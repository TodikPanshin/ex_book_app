import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadBooks, updateBook } from '../store/books.actions'


export function Books() {
    const book = useSelector(storeState => storeState.booksModule.books)
    const [bookIdx, setBookIdx] = useState(0)
    // const [book, setBook, handleChange] = useForm(robotService.getEmptyRobot())




    useEffect(() => {
        loadBooks(bookIdx)
    }, [bookIdx])

    function handaleBookIdx(def) {
        setBookIdx(prevIdx => prevIdx + def)
    }

    function handleCheckboxChange() {
        const updatedBook = { ...book, isFavorite: !book.isFavorite }
        updateBook(updatedBook)
            .then(savedBook => {
                console.log('Updated Book:', savedBook)
            })
            .catch(err => {
                console.log('Cannot save Book', err)
            })
    }


    console.log('test book', book)
    return (
        <>
            <div className='book-container'>
                <button onClick={() => handaleBookIdx(-1)}>back </button>
                <article className="book-card">
                    <div className="card-header">
                        <h3 className='book-title'>{book.title}</h3>
                        <input
                            type="checkbox"
                            id=""
                            name=""
                            checked={book.isFavorite}
                            onChange={handleCheckboxChange}
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
                <button onClick={() => handaleBookIdx(+1)}>next</button>



            </div>

        </>
    )
}