import { storageService } from './storage.service.js'
import { makeId, adToDemoData } from './util.service.js'



export const bookService = {
    query,
    save,
    remove,
    getById,
    getBooksLength,
}

const STORAGE_KEY = 'booksDB'



const gBooks = _loadBooks()

function query(idx = 0) {
    let books = gBooks.books
     
    console.log('test query', books)
    return Promise.resolve(books[idx])
}



function getById(id) {
    const book = gBooks.books.find(book => book._id === id)
    return Promise.resolve(book)
}

function remove(id) {
    const idx = gBooks.book.findIndex(book => book._id === id)
    if (idx !== -1) {
        gBooks.book.splice(idx, 1)
        if (gBooks.books.length === 0) {
            gBooks = _demoBooks()
        }
        storageService.store(STORAGE_KEY, gBooks)
    }
    return Promise.resolve()
}

function save(bookToSave) {
    console.log('bookToSave', bookToSave)
    const idx = gBooks.books.findIndex(book => book._id === bookToSave._id)
    gBooks.books[idx]=bookToSave

    storageService.store(STORAGE_KEY, gBooks)
    return Promise.resolve(bookToSave)

}

function _loadBooks() {
    let books = storageService.load(STORAGE_KEY)
    if (!books || !books.length) {
        books = _demoBooks()
        adToDemoData(books.books, 'isFavorite', false)
        adToDemoData(books.books, '_id', makeId())
        storageService.store(STORAGE_KEY, books)
    }
    console.log(books)
    return books
}

function getBooksLength() {
    const books = _demoBooks()
    return books.books.length
}


function _demoBooks() {
    return {
        "books": [
            {
                "title": "Sea of Death",
                "description": "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
                "rating": "4.2",
                "author": "Jorge Amado",
                "price": "16.35"
            },
            {
                "title": "The Day Lasts More than a Hundred Years",
                "description": "Set in the vast windswept Central Asian steppes and the infinite reaches of galactic space, this powerful novel offers a vivid view of the culture and values of the Soviet Union�s Central Asian peoples.",
                "rating": "4.5",
                "author": "Chingiz Aitmatov",
                "price": "24"
            },
            {
                "title": "The Element of Surprise: Navy SEALS in Vietnam",
                "description": "t used to be said that the night belonged to Charlie. But that wasn't true where SEALs patrolled. For six months in 1970, fourteen men in Juliett Platoon of the Navy's SEAL Team One--incuding the author--carried out over a hundred missions in the Mekong Delta without a single platoon fatality. Their primary mission: kidnap enemy soldiers--alive--for interrogation.",
                "rating": "4.3",
                "author": "Darryl Young",
                "price": "7.99"
            },
            {
                "title": "The Hobbit",
                "description": "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
                "rating": "4.7",
                "author": "J.R.R. Tolkien",
                "price": "10.63"
            },
            {
                "title": "Only a Whisper",
                "description": "Called in the night to transcribe the bedridden confession of a dying man, federal agent Rae Phillips lost her heart to a voice in the darkness, a hero whose face she never saw�",
                "rating": "2.1",
                "author": "Gayle Wilson",
                "price": "2.78"
            },
            {
                "title": "Autobiography of a Yogi",
                "description": "Autobiography of a Yogi is at once a beautifully written account of an exceptional life and a profound introduction to the ancient science of Yoga and its time-honored tradition of meditation",
                "rating": "4.6",
                "author": "Paramahansa Yogananda",
                "price": "18"
            },
            {
                "title": "Out There",
                "description": "Out There is a celebration of books that have a made a difference in our lives.",
                "rating": "3.2",
                "author": "Sarah Stark",
                "price": "10.14"
            },
            {
                "title": "Crafting with Cat Hair: Cute Handicrafts to Make with Your Cat",
                "description": "Got fur balls?",
                "rating": "3.6",
                "author": "Kaori Tsutaya",
                "price": "9.97"
            },
            {
                "title": "The Yiddish Policemen's Union Kindle Edition",
                "description": "Set in the Jewish homeland of � Alaska, this is a brilliantly original novel from Michael Chabon, author of THE ADVENTURES OF KAVALIER & CLAY and WONDER BOYS.",
                "rating": "3.7",
                "author": "Michael Chabon",
                "price": "21.33"
            },
            {
                "title": "One More Day",
                "description": "Carrie Morgan's son disappears. Rumors start to circulate through Carrie's small town. Her husband and friends start to think she's crazy. As the investigation heats up, Carrie must decide what to share, and why.",
                "rating": "3.1",
                "author": "Kelly Simmons",
                "price": "25.82"
            },
            {
                "title": "The Laundry Room",
                "description": "The Laundry Room dramatizes a fascinating moment in the history of the founding of Israel as a self-ruling nation.",
                "rating": "4",
                "author": "Lynda Lippman-Lockhart",
                "price": "17.5"
            }
        ]
    }
}
