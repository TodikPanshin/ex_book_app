import { Books } from "../cmps/books";
import { WishList } from "../cmps/wishlist";

export function Home() {
    return (
        <section className="app-container">
            <div className="books-container">
                <Books />
                <WishList />
            </div>
        </section>
    )
}