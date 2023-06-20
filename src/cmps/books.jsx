
export function Books() {

    return (
        <div className="book-container" >
            <article className="book-card">
                <div className="card-header">
                    <h3 className="book-title">Sea of Death</h3>
                    <input
                        type="checkbox"
                        id=""
                        name=""
                    // checked={Book.isFavorite}
                    // onChange={() => handleCheckboxChange()}
                    />
                </div>
                <hr></hr>
                <h3 className="book-author">Jorge Amado</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dicta sit, cum minus iure ea, amet voluptas animi ut saepe dolorum, commodi quod laborum sed maxime expedita magni quasi quo.saepe dolorum, commodi quod laborum sed maxime expedita magni quasi quo.saepe dolorum, commodi quod laborum sed maxime expedita magni quasi quo</p>
                <div className="rating">
                    <span>Rating:</span>
                    <div>stars cmp</div>
                </div>
                <h3 className="price">Price: $<span>16.35</span> </h3>
            </article>
        </div>


        // <article className="book-card">
        //     <div className="card-header">
        //         <h3>{book.title}</h3>
        //         <input
        //             type="checkbox"
        //             id=""
        //             name=""
        //             checked={Book.isFavorite}
        //             onChange={() => handleCheckboxChange()}
        //         />
        //     </div>
        //     <hr></hr>
        //     <h3>{book.author}</h3>
        //     <p>{book.decription}</p>
        //     <div>
        //         <span>Rating:</span>
        //         <div>stars cmp</div>
        //     </div>
        //     <h3>Price: $<span>{book.price}</span> </h3>
        // </article>
    )
}