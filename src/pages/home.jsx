import { Books } from "../cmps/books";
import { WishList } from "../cmps/wishlist";

export function Home() {
    return (
        <section className="main-container">
            <Books />
            <WishList />
        </section>
    )
}